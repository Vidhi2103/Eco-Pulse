#include <stdlib.h>

void bad() {
  char *buf = malloc(10);
  free(buf);
  buf[0] = 'a'; // Use after free
}
