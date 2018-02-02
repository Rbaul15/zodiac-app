// function getInfo() {
//     var x = document.getElementById("sign").value;
//     document.getElementById("demo").innerHTML = x;
// }

let nameArray = [
	{
		name:"aquarius",
		date: "January 20 - February 18",
		strength: "Strengths: Progressive, original, independent, humanitarian",
		weaknesses: "Weaknesses: Runs from emotional expression, temperamental, uncompromising, aloof",
		info: "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems.",
	},
	{
		name: "pisces",
		date: "February 19 - March 20",
		strength:"Strengths: Compassionate, artistic, intuitive, gentle, wise, musical",
		weaknesses: "Weaknesses: Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr",
		info: "Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back.",
	},
	{
		name: "aries",
		date: "March 21 - April 19",
		strength:"Strengths: Courageous, determined, confident, enthusiastic, optimistic, honest, passionate",
		weaknesses: "Weaknesses: Impatient, moody, short-tempered, impulsive, aggressive",
		info: "The Sun in such high dignity gives them excellent organizational skills, so you'll rarely meet an Aries who isn't capable of finishing several things at once, often before lunch break! Their challenges show when they get impatient, aggressive and vent anger pointing it to other people. Strong personalities born under this sign have a task to fight for their goals, embracing togetherness and teamwork through this incarnation.",
	},
	{
		name: "taurus",
		date: "April 20 - May 20",
		strength:"Strengths: Reliable, patient, practical, devoted, responsible, stable",
		weaknesses: "Weaknesses: Stubborn, possessive, uncompromising",
		info: "Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. People born with their Sun in Taurus are sensual and tactile, considering touch and taste the most important of all senses. Stable and conservative, this is one of the most reliable signs of the zodiac, ready to endure and stick to their choices until they reach the point of personal satisfaction.",
	},
	{
		name: "gemini",
		date: "May 21 - June 20",
		strength:"Strengths: Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas",
		weaknesses: "Weaknesses: Nervous, inconsistent, indecisive",
		info: "Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless. They are fascinated with the world itself, extremely curious, with a constant feeling that there is not enough time to experience everything they want to see.",
	},
	{
		name: "cancer",
		date: "June 21 - July 22",
		strength:"Strengths: Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive",
		weaknesses: "Weaknesses: Moody, pessimistic, suspicious, manipulative, insecure",
		info: "The sign of Cancer belongs to the element of Water, just like Scorpio and Pisces. Guided by emotion and their heart, they could have a hard time blending into the world around them. Being ruled by the Moon, phases of the lunar cycle deepen their internal mysteries and create fleeting emotional patterns that are beyond their control. As children, they don't have enough coping and defensive mechanisms for the outer world, and have to be approached with care and understanding, for that is what they give in return.",
	},
	{
		name: "leo",
		date: "July 23 - August 22",
		strength:"Strengths: Creative, passionate, generous, warm-hearted, cheerful, humorous",
		weaknesses: "Weaknesses: Arrogant, stubborn, self-centered, lazy, inflexible",
		info: "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. There is a specific strength to a Leo and their king of the jungle status. Leo often has many friends for they are generous and loyal. Self-confident and attractive, this is a Sun sign capable of uniting different groups of people and leading them as one towards a shared cause, and their healthy sense of humor makes collaboration with other people even easier.",
	},
	{
		name: "virgo",
		date: "August 23 - September 22",
		strength:"Strengths: Loyal, analytical, kind, hardworking, practical",
		weaknesses: "Weaknesses: Shyness, worry, overly critical of self and others, all work ",
		info: "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world.",
	},
	{
		name: "libra",
		date: "September 23 - October 22",
		strength:"Strengths: Cooperative,diplomatic, gracious, fair-minded, social",
		weaknesses: "Weaknesses: Indecisive, avoids confrontations, will carry a grudge, self-pity",
		info: "People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. ",
	},
	{
		name: "scorpio",
		date: "October 23 - November 21",
		strength:"Strengths: Resourceful, brave, passionate, stubborn, a true friend",
		weaknesses: "Weaknesses: Truth, facts, being right, longtime friends, teasing, a grand passion",
		info: "Scorpio is a Water sign and lives to experience and express emotions. Although emotions are very important for Scorpio, they manifest them differently than other water signs. In any case, you can be sure that the Scorpio will keep your secrets, whatever they may be.",
	},
	{
		name: "sagittarius",
		date: "November 22 - December 21",
		strength:"Strengths: Generous, idealistic, great sense of humor",
		weaknesses: "Weaknesses: Promises more than can deliver, very impatient, will say anything no matter how undiplomatic",
		info: "Sagittarius is extrovert, optimistic and enthusiastic, and likes changes. Sagittarius-born are able to transform their thoughts into concrete actions and they will do anything to achieve their goals.",
	},
	{
		name: "capricorn",
		date: "December 22 - January 19",
		strength:"Strengths: Responsible, disciplined, self-control, good managers",
		weaknesses: "Weaknesses: Know-it-all, unforgiving, condescending, expecting the worst",
		info: "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives.",
	},
];

function getInfo(){
	const userInput = document.getElementById("userInput").value;
	console.log(userInput)
	for(let i = 0; i < nameArray.length; i++){
		if(nameArray[i].name == userInput){
			displayBox.innerHTML = nameArray[i].date + "<br>" + "<br>" + nameArray[i].strength + "<br>" + nameArray[i].weaknesses + "<br>" + "<br>" + nameArray[i].info
// 			// $("#wheel").rotate({bind:{
// 			//   onclick: getInfo(){
// 			//     $(this).rotate({
// 			//       angle: 2,
// 			//       animateTo:180
// 			//       })
// 			//     }
// 			//   }
// 			// });
		}
	}
}

// var angle = 0;
// 	$('#runSearch').on('click', function() {
//     	angle += 90;
//    	$("#wheel").rotate(angle);
// });

// function rotate(){
// 	const userInput = document.getElementById("userInput").value;
// 	for(let i = 0; i < 12; i++){
// 		if(nameArray[i].name == userInput){
// 			var angle = 0;
// 				$('#runSearch').on('click', function() {
//     				angle += 90;
//    				$("#wheel").rotate(angle);
// });
// 		}
// 	}
// }

function rotate(){
	const userInput = document.getElementById("userInput").value;
	for(let i = 0; i < 12; i++){
		if(nameArray[1].name == userInput){
			document.getElementById("wheel").style.transform = "rotate(-30deg)";		
		}
	}
	for(let i = 0; i < 12; i++){
		if(nameArray[2].name == userInput){
			document.getElementById("wheel").style.transform = "rotate(-60deg)";		
		}
	}
	for(let i = 0; i < 12; i++){
		if(nameArray[3].name == userInput){
			document.getElementById("wheel").style.transform = "rotate(-90deg)";		
		}
	}
	for(let i = 0; i < 12; i++){
		if(nameArray[4].name == userInput){
			document.getElementById("wheel").style.transform = "rotate(-120deg)";		
		}
	}
	for(let i = 0; i < 12; i++){
		if(nameArray[5].name == userInput){
			document.getElementById("wheel").style.transform = "rotate(-150deg)";		
		}
	}
	for(let i = 0; i < 12; i++){
		if(nameArray[6].name == userInput){
			document.getElementById("wheel").style.transform = "rotate(-180deg)";		
		}
	}
	for(let i = 0; i < 12; i++){
		if(nameArray[7].name == userInput){
			document.getElementById("wheel").style.transform = "rotate(-210deg)";		
		}
	}
	for(let i = 0; i < 12; i++){
		if(nameArray[8].name == userInput){
			document.getElementById("wheel").style.transform = "rotate(-240deg)";		
		}
	}
	for(let i = 0; i < 12; i++){
		if(nameArray[9].name == userInput){
			document.getElementById("wheel").style.transform = "rotate(-270deg)";		
		}
	}
	for(let i = 0; i < 12; i++){
		if(nameArray[10].name == userInput){
			document.getElementById("wheel").style.transform = "rotate(-300deg)";		
		}
	}
	for(let i = 0; i < 12; i++){
		if(nameArray[11].name == userInput){
			document.getElementById("wheel").style.transform = "rotate(-330deg)";		
		}
	}
}




