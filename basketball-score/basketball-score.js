// prettier-ignore
let buckets = [ "fg", "tp", "ft", "ft", "tp", "tp", "tp", "fg", "fg", "tp", "fg", "tp", "ft", "ft", "ft", "tp" ]

// Write code here
const score = bucketsArr => {
    let fg = (ft = tp = 0);

    bucketsArr.forEach(bucket => {
        if (bucket == 'fg') fg += 2;
        if (bucket == 'ft') ft++;
        if (bucket == 'tp') tp += 3;
    });

    return fg + ft + tp;
};

console.log(score(buckets));
