// src/data/quizData.js

export const quizData = {
  anatomy: [
    {
      subjectId: "anatomy",
      question: "Which muscle is the largest in the human body?",
      options: ["Quadriceps", "Gluteus Maximus", "Latissimus Dorsi", "Gastrocnemius"],
      correctAnswer: 1,
      explanation: "The Gluteus Maximus is the largest muscle in the human body."
    },
    {
      subjectId: "anatomy",
      question: "How many bones are in the adult human body?",
      options: ["206", "208", "210", "212"],
      correctAnswer: 0,
      explanation: "There are 206 bones in the adult human body."
    }
  ],
  biomechanics: [
    {
      subjectId: "biomechanics",
      question: "What is the study of mechanical laws relating to movement?",
      options: ["Biology", "Kinesiology", "Biomechanics", "Physiology"],
      correctAnswer: 2,
      explanation: "Biomechanics is the study of movement mechanics."
    },
    {
      subjectId: "biomechanics",
      question: "Which joint allows movement in all directions?",
      options: ["Hinge", "Pivot", "Ball and Socket", "Saddle"],
      correctAnswer: 2,
      explanation: "Ball and socket joints allow movement in all directions."
    },
      {
    subjectId: "biomechanics",
    question: "What is the primary focus of biomechanics?",
    options: ["Chemical reactions", "Motion and forces", "Mental processes", "Nutrition"],
    correctAnswer: 1,
    explanation: "Biomechanics focuses on the motion and forces that act on the body."
  },
  {
    subjectId: "biomechanics",
    question: "Which joint allows the greatest range of motion?",
    options: ["Hinge", "Ball and Socket", "Pivot", "Gliding"],
    correctAnswer: 1,
    explanation: "Ball and socket joints allow the most range of motion."
  },
    {
    subjectId: "biomechanics",
    question: "Which lever class has the load between the effort and the fulcrum?",
    options: ["First", "Second", "Third", "Fourth"],
    correctAnswer: 1,
    explanation: "In a second-class lever, the load is between the fulcrum and the effort."
  },
  {
    subjectId: "biomechanics",
    question: "What is torque?",
    options: ["Rotational force", "Linear velocity", "Acceleration", "Gravity"],
    correctAnswer: 0,
    explanation: "Torque is the force that causes rotation."
  },
  {
    subjectId: "biomechanics",
    question: "Which term describes the resistance to change in motion?",
    options: ["Friction", "Acceleration", "Inertia", "Torque"],
    correctAnswer: 2,
    explanation: "Inertia is the resistance of an object to a change in its state of motion."
  },
  {
    subjectId: "biomechanics",
    question: "Which axis does flexion and extension occur around?",
    options: ["Vertical", "Frontal", "Sagittal", "Transverse"],
    correctAnswer: 3,
    explanation: "Flexion and extension occur in the sagittal plane around the transverse axis."
  },
  {
    subjectId: "biomechanics",
    question: "What is the term for the rate of change of velocity?",
    options: ["Displacement", "Speed", "Acceleration", "Momentum"],
    correctAnswer: 2,
    explanation: "Acceleration is the rate at which velocity changes."
  },
  {
    subjectId: "biomechanics",
    question: "Which term describes the force that opposes motion?",
    options: ["Inertia", "Friction", "Momentum", "Impulse"],
    correctAnswer: 1,
    explanation: "Friction opposes the motion of objects."
  },
  ],
  physiology: [
  {
    subjectId: "Physiology",
    question: "What is the primary energy source during high-intensity short-duration exercise?",
    options: ["Fat", "Protein", "Creatine Phosphate", "Carbohydrates"],
    correctAnswer: 2,
    explanation: "Creatine Phosphate provides quick bursts of energy during high-intensity short-duration activities."
  },
  {
    subjectId: "exercisePhysiology",
    question: "Which system is responsible for supplying oxygen to the muscles?",
    options: ["Digestive", "Respiratory", "Skeletal", "Nervous"],
    correctAnswer: 1,
    explanation: "The respiratory system supplies oxygen to the body and muscles."
  },
  {
    subjectId: "exercisePhysiology",
    question: "What is the term for increased muscle size due to training?",
    options: ["Hyperplasia", "Hypertrophy", "Atrophy", "Tonicity"],
    correctAnswer: 1,
    explanation: "Hypertrophy refers to the increase in muscle size from strength training."
  },
  {
    subjectId: "exercisePhysiology",
    question: "Which of the following is a slow-twitch muscle fiber characteristic?",
    options: ["Fast contraction", "Fatigue quickly", "Low endurance", "High aerobic capacity"],
    correctAnswer: 3,
    explanation: "Slow-twitch fibers have high aerobic capacity and are fatigue-resistant."
  },
  {
    subjectId: "exercisePhysiology",
    question: "Which hormone increases during exercise to mobilize glucose?",
    options: ["Insulin", "Glucagon", "Melatonin", "Estrogen"],
    correctAnswer: 1,
    explanation: "Glucagon increases to raise blood glucose levels during exercise."
  },
  {
    subjectId: "exercisePhysiology",
    question: "VO2 max is a measure of what?",
    options: ["Muscular strength", "Body fat percentage", "Cardiovascular endurance", "Anaerobic power"],
    correctAnswer: 2,
    explanation: "VO2 max measures the maximum oxygen a person can use during intense exercise, indicating cardiovascular endurance."
  },
  {
    subjectId: "exercisePhysiology",
    question: "Which energy system is used during a marathon?",
    options: ["ATP-PC", "Anaerobic Glycolysis", "Aerobic System", "Phosphagen System"],
    correctAnswer: 2,
    explanation: "The aerobic system supports long-duration, low-to-moderate intensity activities like marathons."
  },
],
training: [
  {
    subjectId: "training_methods",
    question: "What type of training involves repeated short bursts of intense activity followed by rest?",
    options: ["Continuous Training", "Interval Training", "Circuit Training", "Resistance Training"],
    correctAnswer: 1,
    explanation: "Interval training alternates high-intensity activity with rest or low-intensity activity."
  },
  {
    subjectId: "training_methods",
    question: "Which training method focuses on long-duration, steady-state exercise?",
    options: ["HIIT", "Fartlek Training", "Continuous Training", "Plyometric Training"],
    correctAnswer: 2,
    explanation: "Continuous training involves sustained effort over a long period without rest."
  },
  {
    subjectId: "training_methods",
    question: "What does HIIT stand for?",
    options: ["High Impact Interval Training", "High Intensity Interval Training", "Heavy Intensity Internal Training", "Hyperactive Interval Training"],
    correctAnswer: 1,
    explanation: "HIIT stands for High Intensity Interval Training."
  },
  {
    subjectId: "training_methods",
    question: "Which method involves performing a set of exercises in a sequence with minimal rest?",
    options: ["Interval Training", "Strength Training", "Circuit Training", "Agility Training"],
    correctAnswer: 2,
    explanation: "Circuit training is structured with various stations performed in sequence."
  },
  {
    subjectId: "training_methods",
    question: "What is the goal of plyometric training?",
    options: ["Increase endurance", "Improve flexibility", "Develop explosive power", "Build muscle size"],
    correctAnswer: 2,
    explanation: "Plyometric training develops power through explosive movements."
  },
  {
    subjectId: "training_methods",
    question: "Which principle involves gradually increasing the training load over time?",
    options: ["Reversibility", "Specificity", "Overload", "Adaptation"],
    correctAnswer: 2,
    explanation: "Overload means training beyond normal levels to stimulate adaptation."
  },
  {
    subjectId: "training_methods",
    question: "What is the primary goal of resistance training?",
    options: ["Improve balance", "Increase muscular strength", "Enhance flexibility", "Boost agility"],
    correctAnswer: 1,
    explanation: "Resistance training is designed to improve strength and muscle tone."
  },
  {
    subjectId: "training_methods",
    question: "Which of the following is NOT a component of the FITT principle?",
    options: ["Frequency", "Intensity", "Technique", "Time"],
    correctAnswer: 2,
    explanation: "FITT stands for Frequency, Intensity, Time, and Type—not Technique."
  },
  {
    subjectId: "training_methods",
    question: "What does the principle of specificity state?",
    options: ["Train less to recover more", "Train the muscles you want to develop", "Rest is most important", "Cardio improves strength"],
    correctAnswer: 1,
    explanation: "Specificity means training should match the desired outcome or sport activity."
  },
  {
    subjectId: "training_methods",
    question: "Which training method improves both aerobic and anaerobic fitness?",
    options: ["Continuous Training", "Interval Training", "Yoga", "Isometric Training"],
    correctAnswer: 1,
    explanation: "Interval training develops both energy systems through varied intensities."
  },
  {
    subjectId: "training_methods",
    question: "What is a major benefit of flexibility training?",
    options: ["Increase muscle size", "Improve cardiovascular endurance", "Prevent injury", "Enhance strength"],
    correctAnswer: 2,
    explanation: "Flexibility training helps maintain joint health and prevents injury."
  },
  {
    subjectId: "training_methods",
    question: "Which type of stretching involves holding a position for 15-30 seconds?",
    options: ["Ballistic", "Dynamic", "Static", "PNF"],
    correctAnswer: 2,
    explanation: "Static stretching involves holding a stretch without movement."
  },
  {
    subjectId: "training_methods",
    question: "Which training method combines aerobic and strength exercises?",
    options: ["Circuit Training", "Interval Training", "Sprint Training", "Balance Training"],
    correctAnswer: 0,
    explanation: "Circuit training mixes cardiovascular and resistance exercises in sequence."
  },
  {
    subjectId: "training_methods",
    question: "What is 'reversibility' in training?",
    options: ["Gaining strength quickly", "Losing fitness when training stops", "Improving flexibility", "Switching workout types"],
    correctAnswer: 1,
    explanation: "Reversibility refers to the loss of fitness when regular training ceases."
  },
  {
    subjectId: "training_methods",
    question: "Which term describes the body’s adjustment to exercise demands over time?",
    options: ["Plateau", "Overload", "Adaptation", "Regression"],
    correctAnswer: 2,
    explanation: "Adaptation refers to the body’s physiological changes in response to training."
  },
  {
    subjectId: "training_methods",
    question: "What is periodization in training?",
    options: ["Overtraining in short cycles", "Dividing training into planned phases", "Training only in off-season", "Skipping rest days"],
    correctAnswer: 1,
    explanation: "Periodization structures training into cycles to optimize performance and recovery."
  },
  {
    subjectId: "training_methods",
    question: "Fartlek training is also known as:",
    options: ["Speed play", "Power training", "Slow endurance", "Static cycling"],
    correctAnswer: 0,
    explanation: "Fartlek is a Swedish word meaning speed play, combining fast and slow running."
  },
  {
    subjectId: "training_methods",
    question: "Which component of fitness does agility ladder training target?",
    options: ["Flexibility", "Balance", "Agility and coordination", "Strength"],
    correctAnswer: 2,
    explanation: "Agility ladders improve quick footwork, coordination, and agility."
  },
  {
    subjectId: "training_methods",
    question: "Which method uses resistance bands or weights for strength?",
    options: ["Yoga", "Aerobics", "Weight training", "Dynamic stretching"],
    correctAnswer: 2,
    explanation: "Weight training builds strength by applying resistance to muscles."
  },
  {
    subjectId: "training_methods",
    question: "What is the main aim of aerobic training?",
    options: ["Improve explosive power", "Improve cardiovascular endurance", "Build muscle mass", "Increase flexibility"],
    correctAnswer: 1,
    explanation: "Aerobic training strengthens the heart and lungs to improve endurance."
  }
],
nutrition: [
  {
    subjectId: "sports_nutrition",
    question: "Which nutrient is the primary source of energy during high-intensity exercise?",
    options: ["Fat", "Protein", "Carbohydrates", "Vitamins"],
    correctAnswer: 2,
    explanation: "Carbohydrates are the main energy source during high-intensity activities."
  },
  {
    subjectId: "sports_nutrition",
    question: "Which vitamin is essential for calcium absorption?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin D", "Vitamin C"],
    correctAnswer: 2,
    explanation: "Vitamin D is crucial for calcium absorption and bone health."
  },
  {
    subjectId: "sports_nutrition",
    question: "Which mineral is lost in large amounts through sweat?",
    options: ["Iron", "Zinc", "Sodium", "Calcium"],
    correctAnswer: 2,
    explanation: "Sodium is the primary mineral lost through sweat during exercise."
  },
  {
    subjectId: "sports_nutrition",
    question: "Which macronutrient helps in muscle repair and growth?",
    options: ["Carbohydrates", "Fats", "Proteins", "Vitamins"],
    correctAnswer: 2,
    explanation: "Proteins are essential for muscle repair and growth."
  },
  {
    subjectId: "sports_nutrition",
    question: "What is the recommended carbohydrate intake before a long endurance event?",
    options: ["0.5g/kg", "1g/kg", "3-4g/kg", "5g/kg"],
    correctAnswer: 2,
    explanation: "3-4g of carbohydrates per kg of body weight is recommended before endurance events."
  },
  {
    subjectId: "sports_nutrition",
    question: "Which of the following is a complete protein source?",
    options: ["Rice", "Beans", "Eggs", "Wheat"],
    correctAnswer: 2,
    explanation: "Eggs provide all essential amino acids, making them a complete protein source."
  },
  {
    subjectId: "sports_nutrition",
    question: "Which supplement is commonly used to enhance muscle mass and strength?",
    options: ["Vitamin C", "Creatine", "Iron", "Omega-3"],
    correctAnswer: 1,
    explanation: "Creatine is widely used to increase muscle mass and strength."
  },
  {
    subjectId: "sports_nutrition",
    question: "What is glycogen?",
    options: ["A protein", "Stored fat", "Stored carbohydrate", "A vitamin"],
    correctAnswer: 2,
    explanation: "Glycogen is the stored form of carbohydrate in muscles and liver."
  },
  {
    subjectId: "sports_nutrition",
    question: "What is the function of electrolytes in the body?",
    options: ["Support digestion", "Build muscle", "Regulate nerve and muscle function", "Burn fat"],
    correctAnswer: 2,
    explanation: "Electrolytes help regulate nerve signaling and muscle contraction."
  },
  {
    subjectId: "sports_nutrition",
    question: "Which of the following helps prevent muscle cramps during exercise?",
    options: ["Caffeine", "Protein", "Potassium", "Iron"],
    correctAnswer: 2,
    explanation: "Potassium is an essential electrolyte that helps prevent cramps."
  },
  {
    subjectId: "sports_nutrition",
    question: "Which nutrient helps reduce oxidative stress in athletes?",
    options: ["Vitamin E", "Sodium", "Protein", "Carbohydrates"],
    correctAnswer: 0,
    explanation: "Vitamin E is an antioxidant that helps reduce oxidative damage."
  },
  {
    subjectId: "sports_nutrition",
    question: "What is the best time to consume protein after a workout?",
    options: ["Before bed", "2 hours later", "Within 30 minutes", "Morning"],
    correctAnswer: 2,
    explanation: "Consuming protein within 30 minutes post-exercise aids muscle recovery."
  },
  {
    subjectId: "sports_nutrition",
    question: "Which drink is best for rapid rehydration post-exercise?",
    options: ["Energy drink", "Milk", "Water with electrolytes", "Fruit juice"],
    correctAnswer: 2,
    explanation: "Water with electrolytes replenishes fluids and minerals effectively."
  },
  {
    subjectId: "sports_nutrition",
    question: "Which nutrient is essential for oxygen transport in the blood?",
    options: ["Calcium", "Iron", "Zinc", "Magnesium"],
    correctAnswer: 1,
    explanation: "Iron is necessary for hemoglobin formation which carries oxygen."
  },
  {
    subjectId: "sports_nutrition",
    question: "What is the role of omega-3 fatty acids in sports nutrition?",
    options: ["Improve focus", "Boost immunity", "Reduce inflammation", "Enhance flexibility"],
    correctAnswer: 2,
    explanation: "Omega-3s help reduce exercise-induced inflammation and muscle soreness."
  },
  {
    subjectId: "sports_nutrition",
    question: "How much water should an athlete drink per day on average?",
    options: ["0.5 liters", "1 liter", "2-3 liters", "5 liters"],
    correctAnswer: 2,
    explanation: "Athletes typically need 2–3 liters of water daily depending on activity levels."
  },
  {
    subjectId: "sports_nutrition",
    question: "Which vitamin deficiency can impair energy metabolism in athletes?",
    options: ["Vitamin B1", "Vitamin K", "Vitamin D", "Vitamin A"],
    correctAnswer: 0,
    explanation: "Vitamin B1 (thiamine) is essential for carbohydrate metabolism and energy production."
  },
  {
    subjectId: "sports_nutrition",
    question: "Which snack is ideal 30 minutes before exercise?",
    options: ["Bacon and eggs", "Banana", "Ice cream", "Burger"],
    correctAnswer: 1,
    explanation: "Bananas provide quick energy from carbohydrates without heavy digestion."
  },
  {
    subjectId: "sports_nutrition",
    question: "What is the recommended protein intake for athletes (per kg body weight)?",
    options: ["0.8g", "1.2-2.0g", "2.5g", "3.5g"],
    correctAnswer: 1,
    explanation: "1.2 to 2.0 grams of protein per kg is ideal for muscle maintenance in athletes."
  },
  {
    subjectId: "sports_nutrition",
    question: "Which condition results from low iron levels in athletes?",
    options: ["Osteoporosis", "Anemia", "Dehydration", "Hypoglycemia"],
    correctAnswer: 1,
    explanation: "Low iron can lead to anemia, reducing oxygen delivery to muscles."
  }
],



  // Add other subjects similarly with subjectId
};
