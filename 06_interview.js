console.log(
  `--------------------------------------------------------------------------------------------------------`
);
function interviewEligibility(gradScore, hscScore, sscScore, candidateName) {
  if (
    sscScore <= 0 ||
    sscScore == null ||
    sscScore == undefined ||
    isNaN(sscScore) ||
    hscScore <= 0 ||
    hscScore == null ||
    hscScore == undefined ||
    isNaN(hscScore) ||
    gradScore <= 0 ||
    gradScore == null ||
    gradScore == undefined ||
    isNaN(gradScore) ||
    candidateName == null ||
    candidateName == undefined
  ) {
    console.log(`You have entered invalid input`);
  } else {
    if (gradScore >= 70 || hscScore >= 80 || sscScore > 90) {
      console.log(
        `Congrates ${candidateName} You are eligible for TCS interview\n`
      );
    } else {
      console.log(
        `Unfortunately ${candidateName} You are not eligible for TCS interview\n`
      );
    }
  }
}
interviewEligibility(80, 86, 90, "Kanchan");
interviewEligibility(70, 65, 55, "Komal");
interviewEligibility(60, 79, 88, "Swati");