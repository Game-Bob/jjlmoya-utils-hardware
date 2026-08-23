export interface MicrophoneEngine {
  stream: MediaStream;
  context: AudioContext;
  analyser: AnalyserNode;
  timeData: Float32Array<ArrayBuffer>;
  frequencyData: Float32Array<ArrayBuffer>;
}

const audioConstraints = (deviceId: string): MediaTrackConstraints => ({
  autoGainControl: false,
  echoCancellation: false,
  noiseSuppression: false,
  ...(deviceId ? { deviceId: { exact: deviceId } } : {}),
});

export const createMicrophoneEngine = async (deviceId: string): Promise<MicrophoneEngine> => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: audioConstraints(deviceId) });
  const context = new AudioContext();
  const analyser = context.createAnalyser();
  analyser.fftSize = 2048;
  analyser.minDecibels = -96;
  analyser.maxDecibels = 0;
  analyser.smoothingTimeConstant = 0.72;
  context.createMediaStreamSource(stream).connect(analyser);
  await context.resume();
  return {
    stream,
    context,
    analyser,
    timeData: new Float32Array(analyser.fftSize),
    frequencyData: new Float32Array(analyser.frequencyBinCount),
  };
};

export const stopMicrophoneEngine = async (engine: MicrophoneEngine): Promise<void> => {
  engine.stream.getTracks().forEach((track) => track.stop());
  if (engine.context.state !== 'closed') await engine.context.close();
};

export const listMicrophones = async (): Promise<MediaDeviceInfo[]> => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices.filter((device) => device.kind === 'audioinput');
};
