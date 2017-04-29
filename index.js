const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

var sortedRobots = robots.map(robot => {
  let dec = knownDecepticons.includes(robot.name)
  return Object.assign({}, robot, {alliance: dec ? 'decepticon' : 'autobot'})
})

// 1) Uncovering alliances should have a `sortedRobots` array

// 2) Uncovering alliances should have the same length as the original `robots` array

// 3) Uncovering alliances should have 4 decepticons in the `sortedRobots` array

// 4) Uncovering alliances should have 4 autobots in the `sortedRobots` array

// 5) Uncovering alliances should not have modified the objects in the original `robots` array

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

var coloredZebraStripes = zebraStripes.map((stripe, index) => {
  return Object.assign({}, stripe, {color: index % 2 ? 'black' : 'white'})
})

// 6) Zebra stripes should have a `coloredZebraStripes` array

// 7) Zebra stripes should have the same length as the original `zebraStripes` array

// 8) Zebra stripes should have 4 `black` stripes

// 9) Zebra stripes should have 4 `white` stripes

// 10) Zebra stripes should not have modified the objects in the original `robots` array
