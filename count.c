#include <stdio.h>
#include <stdlib.h>
#include <sys/time.h>
#include <inttypes.h>

void get_random (uint32_t* mass, int n){
	srand(time(NULL));
	for(int i = 0; i < n; i++){
		mass[i] = (rand() % 100001);
	}
}
uint32_t* array_init (uint32_t* mass, int n){
	mass = malloc(n * sizeof(uint32_t));
	return mass;
}
double wtime()
{
	struct timeval tv;
	gettimeofday (&tv, NULL);
	return (double)tv.tv_sec + (double)tv.tv_usec / 1E6;
}
void count_sort(uint32_t* mass, int n)
{
	int pos,i,j;
	uint32_t k;
	k = mass[0];
	for (i = 0; i < n; i++){
		if (k < mass[i]){
			k = mass [i];
		}
	}
	k++;

	uint32_t help[k];
	for (i = 0; i < k; i++){
		help[i] = 0;
	}

	for (i = 0; i < n; i++){
		help[mass[i]]++;
	}
	pos = 0;
	for (i = 0; i < k; i++){
		for (j = 0; j < help[i]; j++){
			mass[pos] = i;
			pos++;
		}
	}
}
int main()
{
	int n;
	double t;
	uint32_t* mass = NULL;
  for (n = 50000; n <= 1000000; n = n + 50000) {
    mass = array_init(mass, n);
    get_random (mass,n);
    t = wtime();
    count_sort (mass, n);
    t = wtime() - t;
    printf("сортировка делает %d значений за %.4lf sec\n",n ,t);
  }
return 0;
}
