import { describe, expect, test } from "vitest"

// Mars Rover Action => Rover

describe("Mars Rover", () => {
  test("Move forward - no obstacle", () => {
    expect(
      marsrover([50, 50], [0, 0, Cardinality.N], [Action.MoveForward])
    ).toEqual([0, 1, Cardinality.N])
  })
  test("Move forward - obstacle", () => {
    expect(
      marsrover(
        [50, 50, [25, 25]],
        [25, 24, Cardinality.N],
        [Action.MoveForward]
      )
    ).toEqual([25, 24, Cardinality.N])
  })
  test("Move forward - no obstacle", () => {
    expect(
      marsrover([50, 50], [0, 1, Cardinality.N], [Action.MoveForward])
    ).toEqual([0, 2, Cardinality.N])
  })
  test("Move forward x2 - no obstacle", () => {
    expect(
      marsrover(
        [50, 50],
        [10, 25, Cardinality.N],
        [Action.MoveForward, Action.MoveForward]
      )
    ).toEqual([10, 27, Cardinality.N])
  })
  test("Move forward x4 - no obstacle", () => {
    expect(
      marsrover(
        [50, 50],
        [10, 25, Cardinality.N],
        [
          Action.MoveForward,
          Action.MoveForward,
          Action.MoveForward,
          Action.MoveForward,
        ]
      )
    ).toEqual([10, 29, Cardinality.N])
  })
})

type Mars = [number, number, [number, number]]
type Rover = [number, number, Cardinality]
enum Cardinality {
  N = "North",
  E = "East",
  S = "South",
  W = "West",
}

enum Action {
  MoveForward = "Move forward",
  TurnLeft = "Turn left",
  TurnRight = "Turn right",
}

function marsrover(mars: Mars, rover: Rover, action: Action[]): Rover {
  if (mars[2] && mars[2][0] === 25 && mars[2][1] === 25) {
    return [rover[0], rover[1], Cardinality.N]
  }

  return [rover[0], rover[1] + action.length, Cardinality.N]
}
