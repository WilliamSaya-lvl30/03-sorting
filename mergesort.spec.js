describe("split", () => {
  it("es capaz de dividir arreglos en dos partes", () => {
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    expect(split([5, 72, 3, 7, 5, 12])).toEqual([
      [5, 72, 3],
      [7, 5, 12],
    ]);
  });

  it("es capaz de dividir arreglos impares", () => {
    expect(split([1, 2, 3, 4, 5])).toEqual([
      [1, 2],
      [3, 4, 5],
    ]);
  });
});

describe("merge", () => {
  it("es capaz de mergear dos arreglos ordenadps en uno ordenado", () => {
    expect(merge([1, 3], [4, 6])).toEqual([1, 3, 4, 6]);
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(merge([5, 6], [2, 4])).toEqual([2, 4, 5, 6]);
  });
  it("uno dos valores simples", () => {
    expect(merge([1], [2])).toEqual([1, 2]);
  });
});

describe("mergesort", () => {
  beforeEach(() => {
    spyOn(window, "split").and.callThrough();
    spyOn(window, "merge").and.callThrough();
  });

  it("cuando solo hay un elemento develve el mismo array", () => {
    expect(mergesort([])).toEqual([]);
    expect(mergesort([1])).toEqual([1]);
    expect(window.split.calls.count()).toEqual(0);
    expect(window.merge.calls.count()).toEqual(0);
  });
  it("ordena un arreglo desordenado", () => {
    expect(mergesort([16, 5, 12, 4, 2, 56, 61, 6, 3, 77, 9])).toEqual([
      2,
      3,
      4,
      5,
      6,
      9,
      12,
      16,
      56,
      61,
      77,
    ]);
  });
});
