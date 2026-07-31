# LLM Gladiator Arena

A single-page browser app for running deterministic battles between two LLM-written fighter plans.

## How to run

Open `index.html` in any modern browser. No install, backend, API key, or internet connection is required.

## How to play

1. Paste Fighter A JSON into the left field.
2. Paste Fighter B JSON into the right field.
3. Click **Simulate round**.
4. Watch the replay and read the battle log.
5. Copy the prompt/log for each fighter and paste it into two different LLM chats.
6. Paste their new plans back into the app.
7. Click **Carry final state into next round** to continue the match.

## V1 rules

- 7x7 grid
- 12 ticks per round
- 100 HP per fighter
- No randomness
- HP carries between rounds
- Invalid actions become idle instead of crashing
- Actions: move, dash, attack, block, duck, cast, idle
- Spells: firebolt, blink, shield, snare, heal

## Fighter JSON shape

```json
{
  "schema": 1,
  "fighter_name": "Iron Psalm",
  "strategy": "Close distance and attack.",
  "actions": [
    { "tick": 1, "action": "move", "direction": "right" },
    { "tick": 2, "action": "cast", "spell": "firebolt", "direction": "right" }
  ]
}
```

## Files

- `index.html` — the app
- `samples/fighter-a.json` — sample fighter
- `samples/fighter-b.json` — sample fighter
- `README.md` — this file
