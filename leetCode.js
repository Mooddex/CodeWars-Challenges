
//--------------
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;              // نتحرك لمكان جديد
            nums[i] = nums[j]; // نحط فيه العنصر الجديد
        }
    }

    return i + 1; // عدد العناصر الفريدة
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
