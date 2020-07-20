import * as lib from "../src/lib.js"
import { File } from "../src/lib.js"
import { test } from "./test.js"

test("test baisc", async (test) => {
  test.isEqual(typeof lib.Blob, "function")
  test.isEqual(typeof lib.File, "function")
})

test("new File", async (test) => {
  // @ts-expect-error
  test.throws(() => new File(), TypeError)
  // @ts-expect-error
  test.throws(() => new File([]), TypeError)

  const before = Date.now()
  await new Promise((resolve) => setTimeout(resolve, 3))
  const file = new File(["test"], "name")
  await new Promise((resolve) => setTimeout(resolve, 3))
  const after = Date.now()
  test.equal(file.size, 4)
  test.equal(file.name, "name")
  test.equal(typeof file.lastModified, "number")
  test.ok(file.lastModified > before)
  test.ok(file.lastModified < after)
  test.equal(file.type, "")

  const chunks = []
  // @ts-ignore - https://github.com/microsoft/TypeScript/issues/29867
  for await (const chunk of file.stream()) {
    chunks.push(chunk)
  }

  test.deepEqual(chunks, [new TextEncoder().encode("test")])
})

test("File with lastModified", async (test) => {
  const file = new File(["test"], "name", { lastModified: 1594672000418 })

  test.equal(file.size, 4)
  test.equal(file.name, "name")
  test.equal(file.lastModified, 1594672000418)
  test.equal(file.type, "")
})

test("File with type", async (test) => {
  const file = new File(["test"], "name", {
    lastModified: 1594672000418,
    type: "text/plain",
  })

  test.equal(file.size, 4)
  test.equal(file.name, "name")
  test.equal(file.lastModified, 1594672000418)
  test.equal(file.type, "text/plain")
})

test("File type is normalized", async (test) => {
  const file = new File(["test"], "name", {
    type: "Text/Plain",
  })

  test.equal(file.size, 4)
  test.equal(file.name, "name")
  test.equal(file.type, "text/plain")
})

test("File name is escaped", async (test) => {
  const file = new File(["test"], "dir/name")

  test.equal(file.size, 4)
  test.equal(file.name, "dir:name")
  test.equal(file.type, "")
})
