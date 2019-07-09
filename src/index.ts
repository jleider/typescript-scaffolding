import * as O from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/pipeable";

pipe(
  O.some("hello world"),
  O.fold(() => console.log("failed"), x => console.log(`${x} FooBar`)));

