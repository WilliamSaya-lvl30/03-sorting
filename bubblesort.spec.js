describe("swap", () => {
  it("recibe un array y un indice e intercambia el valor de ese indice por el siguiente", () => {
    let arr = [1, 2, 4, 3];
    swap(arr, 2);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
});

describe("inOrder", () => {
  it("toma un arreglo y un indice y devuelve true si los indices estan ordenados", () => {
    expect(inOrder([1, 2, 3, 4], 2)).toEqual(true);
  });
  it("toma un arreglo y un indice y devuelve false si los indices estan desordenados", () => {
    expect(inOrder([1, 2, 4, 3], 2)).toEqual(false);
  });
  it("toma un arreglo y un indice y devuelve true si los indices son iguales", () => {
    expect(inOrder([1, 2, 3, 3], 2)).toEqual(true);
  });
});

describe("bubblesort", () => {
  it("puede recibir arreglos vacios", () => {
    expect(bubblesort([])).toEqual([]);
  });
  it("ordena un arreglo", () => {
    expect(bubblesort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
  it("verifica cuantas veces se llama a swap en el mejor de los casos", () => {
    spyOn(window, "swap").and.callThrough();
    bubblesort([1, 2, 3, 5, 4]);
    expect(window.swap.calls.count()).toEqual(1);
  });
  it("verifica cuantas veces se llama a inOrder en el mejor de los casos", () => {
    spyOn(window, "inOrder").and.callThrough();
    bubblesort([1, 2, 3, 5, 4]);
    expect(window.inOrder.calls.count()).toEqual(7);
  });
});
