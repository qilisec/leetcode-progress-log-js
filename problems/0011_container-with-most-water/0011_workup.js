var maxArea = function(height) {
    const n = height.length
    let maxWater = 0
    for (let i = 0; i < n; i++) {
        let topHeight = 0
        for (let j = n - 1; j > i; j--) {
            let boxLength = j - i
            if (height[j] > topHeight) {
                topHeight = height[j]
                height[i] <= height[j] ? area = boxLength * height[i] : area = boxLength * height[j]
                if (area > maxWater) {
                    maxWater = area
                }
            }
        }
    }
    return maxWater
};
// Failed on [6801,4040,7716,493,526,2755,957,1298,2477,6189,6442,8476,4745,8663...] (i.e. very large array) due to exceeding time limits

var maxArea = function(height) {
    const n = height.length
    let maxWater = 0
    for (let i = 0; i < n; i++) {
        if (height[i] > height[i-1] || i === 0) {
            let topHeight = 0
            for (let j = n - 1; j > i; j--) {
                let boxLength = j - i
                if (height[j] > topHeight) {
                    topHeight = height[j]
                    height[i] <= height[j] ? area = boxLength * height[i] : area = boxLength * height[j]
                    if (area > maxWater) {
                        maxWater = area
                    }
                }
            }
        }
    }
    return maxWater
};
// Failed again due to exceeding time limits. I thought adding an extra conditional woudl be enough to cut down on the amount of cases that need to be tested.

var maxArea = function(height) {
    let maxArea = 0
    let p1 = 0
    let p2 = height.length - 1
    while (p1 < p2) {
        const localHeight = Math.min(height[p1], height[p2])
        const localWidth = p2 - p1
        const area = localHeight * localWidth
        maxArea = Math.max(maxArea, area)
        if (height[p1] <= height[p2]) {
            p1++
        } else {
            p2--
        }
    }
    return maxArea
}
// Passed. Faster than 14.77% of submissions. Less memory usage than 48.23% of submissions. There are two key understandings is to recognize. The first is that we can assign our two "width markers" so that they gradually get closer together as our code runs instead of having them start next to each other. By doing so, we can start from the "max width" case and end with the "min width" case whereas with height, we have no choice except to assume that our first area calculation arises from our "min height" case. The second factor to recognize is that once we make an area calculation from the obtained widths and heights of our markers, the only possibility for us to find a "larger" maxArea (assuming we set our markers far apart as mentioned earlier) would be to move a marker to the next index (thus lowering width) such that the difference in heights between the two is greater than the previous case. In order to maximize the likelihood that moving to the next index would produce a larger difference in heights, we should move the marker on the index associated with the smaller height. While this may not increase the likelihood that this new area will be larger than the previous area, it does increase the likelihood that, if the new area is in fact larger than the preivous area, it will then also be larger than our current "maxArea."