exports.calculateRankings = (users) => {
    return users
        .sort((a, b) => b.totalPoints - a.totalPoints)
        .map((user, index) => ({
            ...user,
            rank: index + 1
        }));
};

exports.logClaimHistory = (claimData) => {
    // Logic to log claim data to the Claim Points history collection
    // This function should interact with the database to save the claim history
};