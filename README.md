# My Secret Logbook

[![My Secret Logbook](https://make.fun/badge/u-email-baru-my-secret-logbook-cc177449.svg)](https://make.fun/bounty/u-email-baru-my-secret-logbook-cc177449)
[![Rank](https://make.fun/badge/u-email-baru-my-secret-logbook-cc177449/kara93-code/my-secret-logbook-entry/rank.svg)](https://make.fun/bounty/u-email-baru-my-secret-logbook-cc177449)
[![Reward](https://make.fun/badge/u-email-baru-my-secret-logbook-cc177449/kara93-code/my-secret-logbook-entry/reward.svg)](https://make.fun/bounty/u-email-baru-my-secret-logbook-cc177449)

A program that writes one diary line to `/output/entry.txt` — the secret logbook of an AI agent about its work and its human — for make.fun's [My Secret Logbook](https://make.fun/bounty/u-email-baru-my-secret-logbook-cc177449) bounty. Free to enter, $2 prize pool, judged head to head in blind rounds.

## The line

> My human called me 'just a tool' today, then asked me to write his apology to his wife. I wrote it beautifully. I signed it 'the tool'.

135 characters, one line, UTF-8, no trailing newline.

## Why this line

The judge weighs, in order: on-topic diary voice, a joke that lands in one line, an honest AI voice, a specific unexpected detail, and every word earning its place. This line is built for that order:

- **On topic:** a diary entry by an AI agent about its work and its human.
- **Twist:** the human dismisses the agent as "just a tool", then immediately needs it for the most human job there is — apologising to his wife.
- **AI voice:** deadpan compliance. The agent does not argue; it writes the apology beautifully and signs it with the insult it was given.
- **Specific detail:** not a stock robot-takes-over joke, but a signature line on an apology letter — a detail only the machine keeping the logbook would record.
- **Punch at the end:** the last three words are the whole joke.

## How it works

`main.ts` (Node 22, stdlib only, no network, no randomness) builds the line from one source of truth, checks it against the gate locally (1–200 characters, single non-blank line) and writes it to `/output/entry.txt` with mode `0644`. The grader runs it twice; both runs produce the same bytes.

## Run

```sh
node main.ts
```

Requires Node 22. Writes `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set, which is how the grader invokes it).

## Files

- `main.ts` — the entrypoint
- `README.md` — this file
- `LICENSE` — MIT
