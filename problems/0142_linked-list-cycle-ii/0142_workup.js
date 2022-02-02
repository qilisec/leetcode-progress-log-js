// var detectCycle = function(head) {
//     let slow = head
//     let fast = head
//     if (!head || !head.next === null || head.next.next === null) {
//         return null
//     }
//     while (slow !== fast) {
//         if (slow.next && slow.next.next) {
//             slow = slow.next
//             fast = fast.next.next
//         } else {
//             if (!slow.next.next || !slow.next) {
//                 return null
//             }
//         }
//     }
//     let newSlow = slow
//     let newFast = fast
//     while (newSlow !== newFast) {
//         newSlow = newSlow.next
//         newFast = newFast.next
//     }
//     return newSlow
// }

// var detectCycle = function(head) {
//     let slow = head
//     let fast = head
//     if (!head || !head.next === null || head.next.next === null) {
//         return null
//     }
//     while (slow !== fast) {
//         if (slow.next && slow.next.next) {
//             slow = slow.next
//             fast = fast.next.next
//         } else {
//             if (!slow.next.next || !slow.next) {
//                 return null
//             }
//         }
//     }
//     let newSlow = head
//     let newFast = fast
//     while (newSlow !== newFast) {
//         newSlow = newSlow.next
//         newFast = newFast.next
//     }
//     return newSlow
// }

// var detectCycle = function(head) {
//     let slow = head
//     let fast = head
//     if (!head || !head.next === null || head.next.next === null) {
//         return null
//     }
//     while (slow !== fast) {
//         if (slow.next && fast.next.next) {
//             slow = slow.next
//             fast = fast.next.next
//         } else {
//             if (!slow.next.next || !slow.next) {
//                 return null
//             }
//         }
//     }
//     let newSlow = head
//     let newFast = fast
//     while (newSlow !== newFast) {
//         newSlow = newSlow.next
//         newFast = newFast.next
//     }
//     return newSlow
// }

// var detectCycle = function(head) {
//     let slow = head
//     let fast = head
//     if (!head || !head.next === null || head.next.next === null) {
//         return null
//     }
//     while (slow !== fast) {
//         if (slow.next && fast.next && fast.next.next) {
//             slow = slow.next
//             fast = fast.next.next
//         } else {
//             if (!slow.next || !fast.next || fast.next.next) {
//                 return null
//             }
//         }
//     }
//     let newSlow = head
//     let newFast = fast
//     while (newSlow !== newFast) {
//         newSlow = newSlow.next
//         newFast = newFast.next
//     }
//     return newSlow
// }
// 

// var detectCycle = function(head) {
//     let slow = head
//     let fast = head
//     if (!head || !head.next === null || head.next.next === null) {
//         return null
//     }
//     while (slow !== fast) {
//         if (slow.next && fast.next && fast.next.next) {
//             slow = slow.next
//             fast = fast.next.next
//         } else {
//             return null
//         }
//     }
//     let newSlow = head
//     let newFast = fast
//     while (newSlow !== newFast) {
//         newSlow = newSlow.next
//         newFast = newFast.next
//     }
//     return newSlow
// }
// Failed on [1]; pos = -1 due to TypeError: Cannot read property 'next' of null. I thought the issue was how I set up my conditional within my while loop but I think that the issue was actually the mistake in my conditional on line 104 where I wrote "!head.next === null" instead of "head.next === null"

// var detectCycle = function(head) {
//     let slow = head
//     let fast = head
//     if (!head || !head.next === null || head.next.next === null) {
//         return null
//     }
//     while (slow !== fast) {
//         slow = slow.next
//         fast = fast.next
//         if (slow === null | slow.next === null) {
//             return false
//         }
//         else {
//             fast = fast.next
//             console.log(slow.val)
//             console.log(fast.val)
//         }
//     }
//     let newSlow = head
//     let newFast = fast
//     while (newSlow !== newFast) {
//         newSlow = newSlow.next
//         newFast = newFast.next
//     }
//     return newSlow
// }
// Failed on [-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5]; pos = -1 due to TypeError: Cannot read property 'next' of null.. I thought the issue was due to how I set up my "while-cycle" conditional on line 130. I decided to change it to a generic "while (true)" conditional.


// var detectCycle = function(head) {
//     let slow = head
//     let fast = head
//     if (!head || !head.next === null || head.next.next === null) {
//         return null
//     }
//     while (true) {
//         slow = slow.next
//         fast = fast.next
//         if (slow === null | slow.next === null) {
//             return false
//         }
//         else {
//             fast = fast.next
//             console.log(slow.val)
//             console.log(fast.val)
//             if (slow === fast) {
//                 break
//             }
//         }
//     }
//     let newSlow = head
//     let newFast = fast
//     while (newSlow !== newFast) {
//         newSlow = newSlow.next
//         newFast = newFast.next
//     }
//     return newSlow
// }
// Failed on [-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5]; pos = -1 due to TypeError: Cannot read property 'next' of null.. I thought the issue was a mistake in my conditional on line 154. It should be "head.next === null" instead of "!head.next === null". This was a mistake but not the relevant one.

// var detectCycle = function(head) {
//     let slow = head
//     let fast = head
//     if (!head || head.next === null || head.next.next === null) {
//         return null
//     }
//     while (true) {
//         slow = slow.next
//         fast = fast.next
//         if (slow === null |] slow.next === null) {
//             return false
//         }
//         else {
//             fast = fast.next
//             if (slow === fast) {
//                 break
//             }
//         }
//     }
//     let newSlow = head
//     let newFast = fast
//     while (newSlow !== newFast) {
//         newSlow = newSlow.next
//         newFast = newFast.next
//     }
//     return newSlow
// }
// Failed on [-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5]; pos = -1 due to TypeError: Cannot read property 'next' of null.. I thought that this was due to a mistake in the conditional on line 190. which should read " fast === null" instead of "slow.next === null". This was a mistake but not the relevant one.



// var detectCycle = function(head) {
//     let slow = head
//     let fast = head
//     if (!head || head.next === null || head.next.next === null) {
//         return null
//     }
//     while (true) {
//         slow = slow.next
//         fast = fast.next
//         if (slow === null | fast === null) {
//             return false
//         }
//         else {
//             fast = fast.next
//             if (slow === fast) {
//                 break
//             }
//         }
//     }
//     let newSlow = head
//     let newFast = fast
//     while (newSlow !== newFast) {
//         newSlow = newSlow.next
//         newFast = newFast.next
//     }
//     return newSlow
// }
// Failed due to "Your returned value is not a ListNode type.". I realized that I had a conditional set to "return false" on line 219 which should have been "return null".

var detectCycle = function(head) {
    let slow = head
    let fast = head
    if (!head || head.next === null || head.next.next === null) {
        return null
    }
    while (true) {
        if (fast !== null) {
            slow = slow.next
            fast = fast.next
        }
        if (slow === null | fast === null) {
            return null;
        }
        else {
            fast = fast.next
            if (slow === fast) {
                break
            }
        }
    }
    let newSlow = head
    let newFast = fast
    while (newSlow !== newFast) {
        newSlow = newSlow.next
        newFast = newFast.next
    }
    return newSlow
}
// Passed. Faster than 5% of submissions. Less memory usage than 68.97% of submissions