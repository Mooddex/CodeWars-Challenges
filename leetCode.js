
//-------------
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};

//-----
var removeElement = function(nums, val) {
    let i = 0; 

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j]; 
            i++;               
        }
    }

    return i; 
};

//--------//--------------
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;              
            nums[i] = nums[j]; 
        }
    }

    return i + 1; 
};
//------------------
var twoSum = function(nums, target) {
    for(i=0; i<nums.length ; i++ ){
        for(z=i+1; z<nums.length ; z++){
            if (nums[i]+nums[z]=== target){
                return [i,z]
            }
        }
    }
};
//-----------------------
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};
