import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import "jest-enzyme";
import "jest-prop-type-error";

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({ ignoreDefaultProps: true }));

afterEach(() => {
  jest.clearAllMocks();
});
