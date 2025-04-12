const GoalType = {
  LoseWeight: 'lose_weight',
  GainWeight: 'gain_weight',
  MaintainWeight: 'maintain_weight',
} as const;

type GoalType = typeof GoalType[keyof typeof GoalType];

const BiologicalSex = {
  female: 'female',
  male: 'male'
} as const;

type BiologicalSex = typeof BiologicalSex[keyof typeof BiologicalSex];


const ActivityLevels = {
  Sedentary: 1.2,         // Sedentario (poco o ningún ejercicio)
  LightlyActive: 1.375,   // Poco activo (ejercicio ligero o deportes 1-3 días por semana)
  ModeratelyActive: 1.55, // Moderadamente activo (ejercicio moderado 3-5 días por semana)
  VeryActive: 1.725,      // Muy activo (ejercicio intenso 6-7 días a la semana)
  SuperActive: 1.9        // Súper activo (ejercicio muy intenso, doble entrenamiento diario)
} as const;

type ActivityLevels = typeof ActivityLevels[keyof typeof ActivityLevels];

interface UserProps {
  name: string;
  age: number;
  height: number;
  currentWeight: number;
  goalWeight: number;
  BiologicalSex: BiologicalSex;
  activityLevel: ActivityLevels
  goal: GoalType;
}

class User {
  name: string;
  age: number;
  height: number;
  currentWeight: number;
  goalWeight: number;
  BiologicalSex: BiologicalSex;
  activityLevel: ActivityLevels;
  goal: GoalType;

  constructor({ name, age, height, currentWeight, goalWeight, BiologicalSex, activityLevel, goal }: UserProps) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.currentWeight = currentWeight;
    this.goalWeight = goalWeight;
    this.BiologicalSex = BiologicalSex;
    this.activityLevel = activityLevel;
    this.goal = goal;
  }


  get Progress(): string {
    const diff = Math.abs(this.goalWeight - this.currentWeight).toFixed(1);
    return `You are ${diff}kg away from your goal.`;
  }

  public calculateCalories(): { maintenanceCalories: number, goalCalories: number } {
    // Calcula la tasa metabólica basal (BMR) según el sexo, peso, altura y edad
    const basalMetabolicRate = this.BiologicalSex === 'male'
      ? 10 * this.currentWeight + 6.25 * this.height - 5 * this.age + 5
      : 10 * this.currentWeight + 6.25 * this.height - 5 * this.age - 161;

    const maintenanceCalories = basalMetabolicRate * this.activityLevel;

    let goalCalories: number;


    switch (this.goal) {
      case GoalType.LoseWeight:
        goalCalories = maintenanceCalories - 500;
        break;
      case GoalType.GainWeight:
        goalCalories = maintenanceCalories + 500;
        break;
      default:
        goalCalories = maintenanceCalories;
        break;
    }

    return {
      maintenanceCalories: Math.round(maintenanceCalories),
      goalCalories: Math.round(goalCalories)
    };
  }
}


const user = new User({
  name: 'María',
  age: 30,
  height: 165,
  currentWeight: 70,
  goalWeight: 60,
  BiologicalSex: BiologicalSex.female,
  activityLevel: ActivityLevels.LightlyActive,
  goal: GoalType.LoseWeight
});

console.log(user.Progress);
console.log(`Calories needed: ${user.calculateCalories()} kcal`);

