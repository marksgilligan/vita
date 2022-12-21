export interface GameData {
  data: PlayerData[];
}

export interface PlayerData {
  player_id: number;
  player_name: string;
  life: number;
  commander_damage: CommanderDamage[];
  background: string;
  poison_count: number;
  monarch: boolean;
  commander_tax: number;
}

export interface CommanderDamage {
  player_id: number;
  partners: boolean;
  damage: number[];
}
