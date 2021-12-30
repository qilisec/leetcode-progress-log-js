var isValidBST = function(root) {
    let testNode = root.left.left
    console.log(testNode)
};
// First time trying out Leetcode; Testing out submission option

const isValidBST = function(root) {
    let queue = []
    queue.push(root)
    while (queue.length > 0) {    
      let currentNode = queue[0]
          if (currentNode.left !== null) {
              queue.push(currentNode.left)
              if (currentNode.val < currentNode.left.val) {
                  return false
              }
          }
          if (currentNode.right !== null) {
              queue.push(currentNode.right)
              if (currentNode.val > currentNode.right.val) {
                  return false
              }
          }
          queue.shift()
      }    
    return true
  };
// Failed on [2, 2, 2]; Didn't create conditional for currentNode === currentNode.left/right

const isValidBST = function(root) {
    let queue = []
    queue.push(root)
    while (queue.length > 0) {    
      let currentNode = queue[0]
          if (currentNode.left !== null) {
              queue.push(currentNode.left)
              if (currentNode.val <= currentNode.left.val) {
                  return false
              }
          }
          if (currentNode.right !== null) {
              queue.push(currentNode.right)
              if (currentNode.val >= currentNode.right.val) {
                  return false
              }
          }
          queue.shift()
      }    
    return true
  };
// Failed on [5, 4, 6, null, null, 3, 7]; Decided to try new approach (recursive)

const isValidBST = function(root) {
    if (!root) {
        return true
    }
    return valueCompare(root, -2^31, 2^31 - 1)
  };

function valueCompare(node, min, max) {
    if (node !== null) {
        if (node.val < min) {
            return false
        }
        if (node.val > max) {
            return false
        }
    } else {
        return true
    }
    return valueCompare(node.left, min, node.val) && valueCompare(node.right, node.val, max)
}
// Failed on [2, 2, 2]. Forgot to create conditional again

const isValidBST = function(root) {
    if (!root) {
        return true
    }
    return valueCompare(root, -2^31, 2^31 - 1)
  };

function valueCompare(node, min, max) {
    if (node !== null) {
        if (node.val <= min) {
            return false
        }
        if (node.val >= max) {
            return false
        }
    } else {
        return true
    }
    return valueCompare(node.left, min, node.val) && valueCompare(node.right, node.val, max)
}
// Failed on [34, -6, null, -21]. Issue possibly due to "null" being coerced into 0 and then compared against negative numbers

const isValidBST = function(root) {
    let queue = []
    queue.push(root)
    while (queue.length > 0) {    
      let currentNode = queue[0]
          if (currentNode.left !== null) {
              queue.push(currentNode.left)
              if (currentNode.val <= currentNode.left.val) {
                  return false
              }
          }
          if (currentNode.right !== null) {
              queue.push(currentNode.right)
              if (currentNode.val >= currentNode.right.val) {
                  return false
              }
          }
          queue.shift()
      }    
    return true
  };
// Failed on [5, 4, 6, null, null, 3, 7]; Issue due to potential for comparison between nodes that are not parent/child due to the "currentNode.left/right !== null" conditional

const isValidBST = function(root) {
    if (!root) {
        return true
    }
    return compare(root, -2^31, 2^31-1)
};

const compare = function(node, min, max) {
    if (!node) {
        console.log("node is null")
        return true
    } else {
        console.log(node.val)
        if (node.left) {
         if (node.left.val < min || node.left.val >= node.val) {
            console.log("left node less than min")
            return false    
            }
        }
        if (node.right) {
            if (node.right.val > max || node.right.val < node.val) {
            console.log("right node greater than max")
            return false
            }
        } 
        if (!node.left && !node.right) {
            return true
        }
        if (!node.left) {
            min = node.val
            return compare(node.right, min, max)
        }
        if (!node.right) {
            max = node.val
            return compare(node.left, min, max)
        }
        return compare(node.left, min, node.val) && compare(node.right, node.val, max)
    }
}
// Failed on [1, null, 1]; Forgot to include the "===" case conditional again

const isValidBST = function(root) {
    if (!root) {
        return true
    }
    return compare(root, -2^31, 2^31-1)
};

const compare = function(node, min, max) {
    if (!node) {
        console.log("node is null")
        return true
    } else {
        console.log(node.val)
        if (node.left) {
         if (node.left.val < min || node.left.val >= node.val) {
            console.log("left node less than min")
            return false    
            }
        }
        if (node.right) {
            if (node.right.val > max || node.right.val <= node.val) {
            console.log("right node greater than max")
            return false
            }
        } 
        if (!node.left && !node.right) {
            return true
        }
        if (!node.left) {
            min = node.val
            return compare(node.right, min, max)
        }
        if (!node.right) {
            max = node.val
            return compare(node.left, min, max)
        }
        return compare(node.left, min, node.val) && compare(node.right, node.val, max)
    }
}
// Failed on [3, 1, 5, 0, 2, 4, 6, null, null, null, 3]; Possibly issue due to "null" nodes being "ignored" (either in the comparison operator or in the conditional) which causes false "true" evaluations

const isValidBST = function(root) {
    if (!root) {
        return true
    }
    return compare(root, -2^31, 2^31-1)
};

const compare = function(node, min, max) {
    if (!node) {
        console.log("node is null")
        return true
    } else {
        console.log(node.val)
        if (node.left) {
         if (node.left.val <= min || node.left.val >= node.val) {
            console.log("left node less than min")
            return false    
            }
        }
        if (node.right) {
            if (node.right.val >= max || node.right.val <= node.val) {
            console.log("right node greater than max")
            return false
            }
        } 
        if (!node.left && !node.right) {
            return true
        }
        if (!node.left) {
            min = node.val
            return compare(node.right, min, max)
        }
        if (!node.right) {
            max = node.val
            return compare(node.left, min, max)
        }
        return compare(node.left, min, node.val) && compare(node.right, node.val, max)
    }
}
// Failed on [8, -70, 81]. Issue was that I was using "^" as the "power" operator


const isValidBST = function(root) {
    if (!root) {
        return true
    }
    return compare(root, (-2)**31, (2)**31-1)
};

const compare = function(node, min, max) {
    console.log(`min is ${min}`)
    console.log(`max is ${max}`)
    if (!node) {
        console.log("node is null")
        return true
    } else {
        console.log(node.val)
        if (node.left) {
         if (node.left.val <= min || node.left.val >= node.val) {
            console.log("left node less than min")
            return false    
            }
        }
        if (node.right) {
            if (node.right.val >= max || node.right.val <= node.val) {
            console.log("right node greater than max")
            return false
            }
        } 
        if (!node.left && !node.right) {
            return true
        }
        if (!node.left) {
            min = node.val
            return compare(node.right, min, max)
        }
        if (!node.right) {
            max = node.val
            return compare(node.left, min, max)
        }
        return compare(node.left, min, node.val) && compare(node.right, node.val, max)
    }
}
// Failed on [-2147483648, null, 2147483647]; Issue is with the input being equal in value to my initial "min" and "max" values

const isValidBST = function(root) {
    if (!root) {
        return true
    }
    return compare(root, (-2)**31, (2)**31-1)
};

const compare = function(node, min, max) {
    console.log(`min is ${min}`)
    console.log(`max is ${max}`)
    if (!node) {
        console.log("node is null")
        return true
    } else {
        console.log(node.val)
        if (node.left) {
         if (node.left.val <= min && min !== (-2)**31 || node.left.val >= node.val) {
            console.log(`left node is ${node.left.val}, node is ${node.val}, min is ${min}`)
            console.log("left node less than min")
            return false    
            }
        }
        if (node.right) {
            if (node.right.val >= max && max !== (2)**31-1 || node.right.val <= node.val) {
            console.log(`right node is ${node.right.val}, node is ${node.val}, max is ${max}`)
            console.log("right node greater than max")
            return false
            }
        } 
        if (!node.left && !node.right) {
            return true
        }
        if (!node.left) {
            min = node.val
            return compare(node.right, min, max)
        }
        if (!node.right) {
            max = node.val
            return compare(node.left, min, max)
        }
        return compare(node.left, min, node.val) && compare(node.right, node.val, max)
    }
}
// Failed on [-2147483648, null, 2147483647, -2147483648]; Issue is that nwo that I prevent "false" reports incorrectly because I have made it impossible to declare "false" when "min" and "max" are at their default values.

const isValidBST = function(root) {
    if (!root) {
        return true
    }
    return compare(root, (-2)**31, (2)**31-1)
};

const compare = function(node, min, max) {
    console.log(`min is ${min}`)
    console.log(`max is ${max}`)
    if (!node) {
        console.log("node is null")
        return true
    } else {
    if (node.val >= max || node.val <= min) {
     return false   
    }
        return compare(node.left, min, node.val) && compare(node.right, node.val, max)
    }
}
// Failed on [2147483647] due to the "node.val >= max" conditional being triggered

const isValidBST = function(root) {
    if (!root) {
        return true
    }
    return compare(root, (-2)**31-1, (2)**31)
};

const compare = function(node, min, max) {
    if (!node) {
        return true
    }
    if (node.val >= max || node.val <= min) {
     return false   
    }
    return compare(node.left, min, node.val) && compare(node.right, node.val, max)
}
// Passed; Faster than 84.10%, Less memory usage than 22.26%