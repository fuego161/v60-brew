# V60 Brew

A small project, taking James Hoffmann's "[Ultimate V60 Technique](https://www.youtube.com/watch?v=AI4ynXzkSQo)" and outputting the instructions into a digestible format.

## Key Information

- Brew Ratio: 60g/L
- Simplified Ratio: 15 : 250
  - `coffeeWeight : brewWeight`
- Brew weight formula: `brewWeight = (y/x) * coffeeWeight`

## Guide

Adapting [Pieter's comment](https://www.youtube.com/watch?v=AI4ynXzkSQo&lc=UgzbNkrXFPLmucsv8XN4AaABAg):

### Phase One

- Grind `coffeeWeight` of coffee
- Rinse paper filter with water just off the boil
  - This removes any paper taste and preheats the brewer
- Add coffee grounds to V60
- Create well in the middle of the grounds
  - This helps to evenly saturate all the grounds during the blooming phase
- Start timer

### Phase Two

t = 0:00

- Add 2x `coffeeWeight`
  - `bloomWater = coffeeWeight * 2`
  - Do not use more than 3x `coffeeWeight`
- Swirl the coffee slurry until evenly mixed
  - The aim is to wet all the coffee grounds by evenly mixing bloom water and coffee
  - Swirling is better than using a spoon
- Bloom for up to 45s
  - This allows CO2 to escape which will improve extraction

### Phase Three

t = 0:45

- Add water aiming for 60% of total brew weight
  - `sixtyPercentPour = (60 / 100) * brewWeight`
  - This phase is critical!
  - Since you already added `bloomWater`, add `sixtyPercentPour - bloomWater` in 30s

### Phase Four

t = 1:15

- Add water aiming for 100% of the total `brewWeight` = `finalPour` in the next 30s
  - `finalPour = brewWeight - sixtyPercentPour;`

### Phase Five

t = 1:45

- Stir 1x clockwise and 1x anticlockwise with spoon
  - This knocks off grounds from side wall
- Allow V60 to drain a little
- Give V60 a gentle swirl
  - This helps obtain a flat coffee bed at bottom of V60 for even extraction
- Let brew drawdown
  - The higher the temperature, the faster the drawdown
- Aim to finish drawdown by t = 3:30
