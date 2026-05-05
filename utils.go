package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	rand.Seed(time.Now().UnixNano())
	fmt.Println("Starting wasm-lab-303...")
	result := generate(10)
	fmt.Printf("Generated %d items\n", len(result))
}

func generate(n int) []int {
	items := make([]int, n)
	for i := range items {
		items[i] = rand.Intn(1000)
	}
	return items
}
