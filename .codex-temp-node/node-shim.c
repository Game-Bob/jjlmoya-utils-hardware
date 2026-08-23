#include <stdlib.h>
#include <unistd.h>

int main(int argc, char **argv) {
  char **next = calloc((size_t)argc + 2, sizeof(char *));
  if (next == NULL) return 1;
  next[0] = "/lib64/ld-linux-x86-64.so.2";
  next[1] = "/tmp/codex-node-v24.19.0/bin/node";
  for (int index = 1; index < argc; index += 1) next[index + 1] = argv[index];
  execv(next[0], next);
  return 1;
}
