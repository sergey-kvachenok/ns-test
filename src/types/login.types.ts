export type LoginBodyType = {
  username: string;
  password: string;
};

export type LoginResponseType = {
  token: string;
};

export type ServerType = {
  name: string;
  distance: number;
};

export type OrderType = 'asc' | 'desc';
