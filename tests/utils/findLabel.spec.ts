import {mockPermissions} from "../../dummies/mockPermissions";
import {findLabel} from "../../src/utils/findLabel";

describe("findLabel spec", () => {

  const codes = ['A', 'B', 'B-1', 'B-1-1', 'B-2', 'C', 'C-1'];

  for(const code of codes){
    it(`should return \`label ${code}\``, () => {
        const result = findLabel(`code ${code}`, mockPermissions);
        expect(result).toBe(`label ${code}`);
    });
  }

  it("when undefined should return null", () => {
    const result = findLabel(undefined, mockPermissions);
    expect(result).toBe(null);
  });

  it("when null should return null", () => {
    const result = findLabel(null, mockPermissions);
    expect(result).toBe(null);
  });
});