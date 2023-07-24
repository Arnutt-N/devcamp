/*
function draw1_1(n) {
  line = "----------ข้อ 1.1----------"
  console.log(line)
  text = ""
  for (let i = 0; i < n; i++) {
    text += "*"
  }

  console.log(text)
}
draw1_1(2)
draw1_1(3)
draw1_1(4)

function draw1_2(n) {
  line = "----------ข้อ 1.2----------"
  console.log(line)
  text = ""
  for (let i = 0; i < n; i++) {
    for (let i = 0; i < n; i++) {
      text += "*"
    }
    text += "\n"
  }

  console.log(text)
}
draw1_2(2)
draw1_2(3)
draw1_2(4)

function draw1_3(n) {
  line = "----------ข้อ 1.3----------"
  console.log(line)
  text = ""

  for (let i = 0; i < n; i++) {
    for (let i = 0; i < n; i++) {
      text += i + 1
    }
    text += "\n"
  }

  console.log(text)
}
draw1_3(2)
draw1_3(3)
draw1_3(4)
*/
// function draw1_4(n) {
//   line = "----------ข้อ 1.4----------"
//   console.log(line)

//   for (let i = 1; i <= n; i++) {
//     let text = ""
//     for (let j = 1; j <= n; j++) {
//       text += i
//     }

//     console.log(text)
//   }
// }
// draw1_4(2)
// draw1_4(3)
// draw1_4(4)

// function draw1_5(n) {
//   line = "----------ข้อ 1.5----------"
//   console.log(line)
//   let text = ""
//   for (let i = n; i >=1 ; i--) {
//     for (let j = 1; j <= n; j++) {
//       text += i
//     }
//     text += "\n"
//   }
//   console.log(text)
// }
// draw1_5(2)
// draw1_5(3)
// draw1_5(4)

// function draw1_6(n) {
//   line = "----------ข้อ 1.6----------"
//   console.log(line)
//     let count = 1
//     for (let i = 0; i < n; i++) {
//         let text = ""
//     for (let j = 0; j < n; j++) {
//         text += count
//         count++
//         }
//    console.log(text)
//   }

// }
// draw1_6(2)
// draw1_6(3)
// draw1_6(4)

// function draw1_7(n) {
//   line = "----------ข้อ 1.7----------"
//   console.log(line)
//   let count = n*n
//   for (let i = n; i >= 1 ; i--) {
//     let text = ""
//     for (let j = 1; j <= n; j++) {
//       text += count
//       count--
//     }
//     console.log(text)
//   }
// }
// draw1_7(2)
// draw1_7(3)
// draw1_7(4)

// function draw1_8(n) {
//   line = "----------ข้อ 1.8----------"
//   console.log(line)
//   let text = ""
//   for (let i = 0; i < n; i++) {
//     text += i * 2 + "\n"
//   }
//   console.log(text)
// }

// draw1_8(2)
// draw1_8(3)
// draw1_8(4)

// function draw1_9(n) {
//   line = "----------ข้อ 1.9----------"
//   console.log(line)
//   let text = ""
//   for (let i = 0; i < n; i++) {
//     text += (i+1) * 2 + "\n"
//   }
//   console.log(text)
// }

// draw1_9(2)
// draw1_9(3)
// draw1_9(4)

// function draw1_10(n) {
//   line = "----------ข้อ 1.10----------"
//   console.log(line)
//   for (let i = 1; i <= n; i++) {
//     let text = ""
//     for (let j = 1; j <= n; j++) {
//       text += i * j
//     }
//     console.log(text)
//   }
// }

// draw1_10(2)
// draw1_10(3)
// draw1_10(4)

// function draw1_11(n) {
//   line = "----------ข้อ 1.11----------"
//   console.log(line)
//   for (let i = 0; i < n; i++) {
//     let text = ""
//     for (let j = 0; j < n; j++) {
//       if (j != i) {
//         text += "*"
//       } else {
//         text += "-"
//       }
//     }
//     console.log(text)
//   }
// }

// draw1_11(2)
// draw1_11(3)
// draw1_11(4)

// function draw1_12(n) {
//   line = "----------ข้อ 1.12----------"
//   console.log(line)
//   for (let i = 0; i < n; i++) {
//     let text = ""
//     for (let j = 0; j < n; j++) {
//       if (j+i===n-1) {
//         text += "-"
//       } else {
//         text += "*"
//       }
//     }
//     console.log(text)
//   }
// }

// draw1_12(2)
// draw1_12(3)
// draw1_12(4)

// function draw2_1(n) {
//   line = "----------ข้อ 2.1----------"
//   console.log(line)
//   for (let i = 0; i < n; i++) {
//     let text = ""
//     for (let j = 0; j < n; j++) {
//       if (j > i) {
//         text += "-"
//       } else {
//         text += "*"
//       }
//     }
//     console.log(text)
//   }
// }

// draw2_1(2)
// draw2_1(3)
// draw2_1(4)

// function draw2_2(n) {
//   line = "----------ข้อ 2.2----------"
//   console.log(line)
//   for (let i = 0; i < n; i++) {
//     let text = ""
//     for (let j = 0; j < n; j++) {
//       if (j + i>n-1) {
//         text += "-"
//       } else {
//         text += "*"
//       }
//     }
//     console.log(text)
//   }
// }

// draw2_2(2)
// draw2_2(3)
// draw2_2(4)

// function draw2_3(n) {
//   line = "----------ข้อ 2.3----------"
//   console.log(line)
//   for (let i = 0; i < n+(n-1); i++) {
//     let text = ""
//     for (let j = 0; j < n; j++) {
//       if (j > i || (j+i)>n+(n-2)) {
//         text += "-"
//       } else {
//         text += "*"
//       }
//     }
//     console.log(text)
//   }
// }

// draw2_3(2)
// draw2_3(3)
// draw2_3(4)

// function draw2_4(n) {
//   line = "----------ข้อ 2.4----------"
//   console.log(line)
//   for (let i = 0; i < n + (n - 1); i++) {
//     let text = ""
//     for (let j = 0; j < n; j++) {
//       if (i < n-1 && i>=j) {
//         text += i + 1
//       } else if (i === n-1 && j <= i) {
//         text += n
//       } else if (i > n-1 && i+j <=n+(n-2)) {
//         text += (n+(n-1))-i
//       } else {
//         text += "-"
//       }
//     }
//     console.log(text)
//   }
// }

// draw2_4(2)
// draw2_4(3)
// draw2_4(4)

// function draw2_5(n) {
//   line = "----------ข้อ 2.5----------"
//   console.log(line)
//   for (let i = 0; i < n; i++) {
//     let text = ""
//     for (let j = 0; j < n; j++) {
//       if (j + i < n - 1) {
//         text += "-"
//       } else {
//         text += "*"
//       }
//     }
//     console.log(text)
//   }
// }

// draw2_5(2)
// draw2_5(3)
// draw2_5(4)

// function draw2_6(n) {
//   line = "----------ข้อ 2.6----------"
//   console.log(line)
//   for (let i = 0; i < n; i++) {
//     let text = ""
//     for (let j = 0; j < n; j++) {
//       if (j < i) {
//         text += "-"
//       } else {
//         text += "*"
//       }
//     }
//     console.log(text)
//   }
// }

// draw2_6(2)
// draw2_6(3)
// draw2_6(4)

// function draw2_7(n) {
//   line = "----------ข้อ 2.7----------"
//   console.log(line)
//   for (let i = 0; i < n + (n - 1); i++) {
//     let text = ""
//     for (let j = 0; j < n; j++) {
//       if (j + i <= n - 2 || i - j > n - 1) {
//         text += "-"
//       } else {
//         text += "*"
//       }
//     }
//     console.log(text)
//   }
// }

// draw2_7(2)
// draw2_7(3)
// draw2_7(4)

// function draw2_8(n) {
//   line = "----------ข้อ 2.8----------"
//   console.log(line)
//   let count = 1
//   for (let i = 0; i < n + (n - 1); i++) {
//     let text = ""
//     for (let j = 0; j < n; j++) {
//       if ((i < n - 1 && j + i > n - 2) || (i > n - 2 && i - j < n)) {
//         text += count
//         count++
//       } else {
//         text += "-"
//       }
//     }
//     console.log(text)
//   }
// }

// draw2_8(2)
// draw2_8(3)
// draw2_8(4)

// function draw2_9(n) {
//   line = "----------ข้อ 2.9----------"
//   console.log(line)
//   for (let i = 0; i < n; i++) {
//     let text = ""
//     for (let j = 0; j < n + (n - 1); j++) {
//       if (j + i <= n - 2 || j - i > n - 1) {
//         text += "-"
//       } else {
//         text += "*"
//       }
//     }
//     console.log(text)
//   }
// }

// draw2_9(2)
// draw2_9(3)
// draw2_9(4)

// function draw2_10(n) {
//   line = "----------ข้อ 2.10----------"
//   console.log(line)
//   for (let i = 0; i < n; i++) {
//     let text = ""
//     for (let j = 0; j < n + (n - 1); j++) {
//       if (j + i > n + (n - 2) || j - i < 0) {
//         text += "-"
//       } else {
//         text += "*"
//       }
//     }
//     console.log(text)
//   }
// }

// draw2_10(2)
// draw2_10(3)
// draw2_10(4)

// function draw3_1(n) {
//   line = "----------ข้อ 3.1----------"
//   console.log(line)
//   for (let i = 0; i < n + (n - 1); i++) {
//     let text = ""
//     for (let j = 0; j < n + (n - 1); j++) {
//       if (j + i < n - 1 || j + i > 3 * (n - 1) || Math.abs(j - i) > n - 1) {
//         text += "-"
//       } else {
//         text += "*"
//       }
//     }
//     console.log(text)
//   }
// }

// draw3_1(2)
// draw3_1(3)
// draw3_1(4)

// function draw3_2(n) {
//   line = "----------ข้อ 3.2----------"
//   console.log(line)
//   let count = 1
//   for (let i = 0; i < n + (n - 1); i++) {
//     let text = ""
//     for (let j = 0; j < n + (n - 1); j++) {
//       if (j + i < n - 1 || j + i > 3 * (n - 1) || Math.abs(j - i) > n - 1) {
//         text += "-"
//       } else {
//         text += count
//         count++
//       }
//     }
//     console.log(text)
//   }
// }

// draw3_2(2)
// draw3_2(3)
// draw3_2(4)

// function draw3_3(n) {
//   line = "----------ข้อ 3.3----------"
//   console.log(line)
//   let arr = []
//   let text = ""
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (j > i) {
//         text += "-"
//       } else {
//         text += "*"
//       }
//     }
//     text += "\n"
//   }
//   arr.push([text])
//   for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr[i].length; j++) {
//       console.log(arr[i][j])
//     }
//   }
// }

// draw3_3(2)
// draw3_3(3)
// draw3_3(4)

function draw3_4(n) {
  line = "----------ข้อ 3.4----------"
  console.log(line)
  let arr = []
  let text = ""
  for (let i = 0; i < n + (n - 1); i++) {
    for (let j = 0; j < n + (n - 1); j++) {
      if (j + i < n - 1 || j + i > 3 * (n - 1) || Math.abs(j - i) > n - 1) {
        text += "-"
      } else {
        text += "*"
      }
    }
    text += "\n"
  }
  arr.push([text])
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j])
    }
  }
}

draw3_4(2)
draw3_4(3)
draw3_4(4)
