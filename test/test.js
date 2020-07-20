"use strict"

import tape from "tape"

/**
 * @param {string} name
 * @param {tape.TestCase} unit
 */
export const test = (name, unit) =>
  tape(name, async (assert) => {
    try {
      await unit(assert)
      assert.end()
    } catch (error) {
      assert.fail(error)
    }
  })
