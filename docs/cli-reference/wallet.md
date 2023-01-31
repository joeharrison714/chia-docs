---
sidebar_label: Wallet
title: Wallet CLI
slug: /wallet-cli
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```
This document is a reference for Chia's `wallet` CLI commands. The following `wallet` commands are documented on their own dedicated pages:

* [DIDs](/did-cli) (Decentralized Identifiers)
* [NFTs](/nft-cli) (Non-Fungible Tokens)
* [Offers](/offer-cli)

## Reference

## `add_token`

Functionality: Add/Rename a CAT to the wallet by its asset ID

Usage: chia wallet add_token [OPTIONS]

Options:

| Short Command | Long Command      | Type    | Required | Description                                                                                                  |
| :------------ | :---------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the `rpc_port` under `wallet` in config.yaml |
| -id           | --asset-id        | TEXT    | True     | The Asset ID of the coin you wish to add/rename (the treehash of the TAIL program)                           |
| -n            | --token-name      | TEXT    | False    | The name you wish to designate to the token                                                                  |
| -f            | --fingerprint     | INTEGER | False    | The wallet fingerprint you wish to add the token to                                                          |
| -h            | --help            | None    | False    | Show a help message and exit                                                                                 |

<details>
<summary>Example</summary>

Add the Spacebucks token:

```bash
chia wallet add_token --asset-id a628c1c2c6fcb74d53746157e438e108eab5c0bb3e5c80ff9b1910b3e4832913 --token-name Spacebucks --fingerprint 2121994410
```

Response:

```
Successfully added Spacebucks with wallet id 3 on key 2121994410
```

</details>

---

## coins:

Functionality: List, split, and combine your wallet's coins

:::warning

The following `coin` commands (`combine`, `list`, and `split`) are currently only available in the `main` branch of the codebase. They are not yet supported. Use at your own risk!

:::

### `combine`

Functionality: Combine coins (typically used for combining dust)

Usage: chia wallet coins combine [OPTIONS]

Options:

| Short Command | Long Command            | Type    | Required | Description                                                                                                  |
| :------------ | :---------------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------- |
| -p            | --wallet-rpc-port       | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the `rpc_port` under `wallet` in config.yaml |
| -f            | --fingerprint           | INTEGER | False    | Set the fingerprint to specify which wallet to use                                                           |
| -i            | --id                    | INTEGER | False    | ID of the wallet to use [default: 1]                                                                         |
| -a            | --target-amount         | TEXT    | False    | An optional target coin amount, if you want to create a coin with a specific amount                          |
|               | --min-amount            | TEXT    | False    | Ignore coins worth less then this much XCH or CAT units                                                      |
|               | --exclude-amount        | TEXT    | False    | Exclude any coins with this amount from being included (can be reused)                                                       |
| -n            | --number-of-coins       | INTEGER | False    | The number of coins we are combining [default: 500]                                                          |
|               | --max-dust-amount       | TEXT    | False    | Ignore coins worth more then this much XCH or CAT units [default: 0.000001000000]                            |
| -m            | --fee                   | TEXT    | False    | Set the fees for the transaction, in XCH [default: 0]                                                        |
|               | --input-coin            | TEXT    | False    | Only combine coins with these ids (can be reused)                                                            |
|               | --largest-first         | None    | False    | Sort coins from largest to smallest                                                                          |
|               | --smallest-first        | None    | False    | Sort coins from smallest to largest                                                                          |
| -h            | --help                  | None    | False    | Show a help message and exit                                                                                 |

<details>
<summary>Example</summary>

First, list the coins available:

```bash
chia wallet coins list --fingerprint 2121994410 --id 1
```

Note that there are 20 coins worth 10 mojos each. We'll combine these in the next step:

```bash
There are a total of 24 coins in wallet 1.
24 confirmed coins.
0 unconfirmed additions.
0 unconfirmed removals.
Confirmed coins:
Coin ID: 0xa22cd5e34c89b2377f4bb7e002847adcb066cd7cc8b58fda257662b9ee04bea0
        Address: xch100gjrhex97qg7uc7lgnnwu3xgrxnxa7fajpfeh6z7925455qz2vsd2qcql Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x2af0762e0d9d80164c2582e4f49e1b6f00b62756075c6677dc1f6054ddcc55b5
        Address: xch1vnzcrs37lrta5ty88shf6ew5hnexvptetzk4pjthad4jnhptsmfqslltea Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0xb4aa54a954b5eac869c612c018d61a7b441ed39fedf9adaea8608acc368c5066
        Address: xch1lhnmyhn3w58kxj49vxuv2rxkyvpwaukjfhr5cnpl02jl0pdpzqqqf90mws Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0xcc1ad94d7e5a27e3562b4867451b9c0203c0d674baf2be2cff49a9fdf9eb7736
        Address: xch1a98gxner58d2q8vj07yzyzg3m93209u8sa8lrz0s8twhdundducsmccz55 Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0xc800fcab9aaa708f2e6ce966f1b397bb1f53ee543f4ce0408416237312d5e0ea
        Address: xch1u7xprttzcp0grk4fjmcy0a46dl6l925fypgyyslt8q5akl9s7pds5q79nh Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0xbb2d420a64fc778b9a225c7f814a09e0b3dc564a64ecd7de173e8450ca74ab41
        Address: xch1vmkp8xffq59jjtkvrdhhylc8mfle86zxulnhr2r64dvs9hunh4zqhn7djg Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x51f8065bf8f39d08898446c17cf655b196c1146bf4c4c6dacd4f2e71cfcb8b1a
        Address: xch1meq05gnw8pfyq03625rgtezr3whcntqu3m0ej0xmenxy58r7zalqjxxs3d Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x72ad2d9898be2c6c6f10790239f50ca1dcdb00aff73592d22a163ed965bf5b1b
        Address: xch1fev2qaclwpcue9kx4p39dzfxpzaavvcz5v3lhx77cxha7f0tjjlsngh5k0 Amount: 0.196499999999 xch (196499999999 mojo), Confirmed in block: 2822660

Coin ID: 0x5c7060b49c53c4febc1278ef50bee81af4c53ea5fea6d30efb4dbb436321815c
        Address: xch1fev2qaclwpcue9kx4p39dzfxpzaavvcz5v3lhx77cxha7f0tjjlsngh5k0 Amount: 1e-09 xch (1000 mojo), Confirmed in block: 2867748

Coin ID: 0x40e3eadbf20bf34de22480c892cbb689dfbd822e9656d3712d82b7473eb7e273
        Address: xch1q92f496rvwlzpau8qd2pj5gjflnssl9j0947x8cap40j4qh9jkwqd6rp4v Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x83ff6c33a944d48d6ab38331163454b6a5d7434221e0c5d60675043eaf947242
        Address: xch1xacs6cpmun7k3sm62dqly5kasdamyswhh6jfjhyng29lp8732zesglas0n Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x88e475174ee655938e9b26a2705fb30452fc533f30b0999485ccd1084aa055a9
        Address: xch1sncvgskpa5wuhmdr64rp5ekcjy2wxzk8v03ce8cyqnfcpp4t7z3qv80y2h Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x68e11af90b3e4dbd80da8b405af9e6717631209bacadbb2bcea405225b39c633
        Address: xch1tmfclgxwysh9pa5rg9p49k2z67je7agns7m29xmpy03ajy7fdjmse4ff6f Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0xa6f4d73e4fda0eb7c04d6a83e10c5465d94786cd92920ec4ccc0e805ee573abb
        Address: xch1799u8mjkq4wt6t3avgcfxqk56qcwkx2dv9rw9q2yahm8taq4jwcqxaqd6m Amount: 7.99e-10 xch (799 mojo), Confirmed in block: 2892717

Coin ID: 0x029b8689abda7f4ff4871e1cd69eb32725a0cda8520b751bcf774fb681e19bc5
        Address: xch1fev2qaclwpcue9kx4p39dzfxpzaavvcz5v3lhx77cxha7f0tjjlsngh5k0 Amount: 1e-09 xch (1000 mojo), Confirmed in block: 2867783

Coin ID: 0x282829e2f79bbdf8b422ec46dcd91a4b3cb06e62958ce65d1b65def22ff9314f
        Address: xch1wsklujnv47uxafhnevq46evghj02kly25scg9dnfu09l5neq9cfs4fqfdc Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x7d5dc84c5b1ff8c2be3cae00e7e816fd731e42d4a1ca16edaf30b2478d72385b
        Address: xch1rm0ruksu45mq2dwr4dt55nks7dhe3pkhlfxssd9yaampgk7ujscq4vx4t4 Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x62f52d45a7410383c843b4da7d64697ceeab53ab74697f8c038cc2d4380443c7
        Address: xch1p9dmd6a34a83vly9rkvc5m4e5dsapw96fngqhcfjg608m9chcy6qg67mrf Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x09ebdda27f459887dd6886768eb5e9eb49e49474841d609e7db641779e008dd0
        Address: xch1crfal449k3252aez4z4sqy0p7u7cx5pvs67yh4fq6sftl8fmgnsqhsak54 Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x79ae16705903cb0c345040d9f57355952c440413fb256e84bcac75160cd74032
        Address: xch1qrn3yjn3m030ugdm0jtumds4ctd2pcm6em8843rqn9fn4dc728esl89tk3 Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x47ef42d080ce312f72d2ab8d1a21d181b3982b2d44577664208413eb76458474
        Address: xch195p7grrra9a9c5p6m3pj3zaq59np5dsafpf9v7jvtqfg5alrvc3qf8d9qw Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0xa39916e6b797a2eae47f1eaee3b291d3cbe486b15093b46171eb312e0b5e4d05
        Address: xch1fpgqnygrq7ahgq595pf0mar4tzg6xn0muk8vx7f9kxfpppa6edcqn3l2xa Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x6db6fe7cf539437880ab2b5f622ff93f38da3665a0009bde69fa7c699fe37b88
        Address: xch1y9qkpseasyqq5lqca7vdh07a86lc3fkdvwq5r00h6h5mvja578eq5t8gvp Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x7d22a9476247307e56614208bfb748cba1c9c0d0f25236a0c755f66412c767a0
        Address: xch1ty5e0jsxmsn8vzrs95dwu7ufl292gq9xar235weeqhvdk78syrzsy2vjap Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717
```

Next, combine the twenty 10-mojo coins into a single coin, minus a 1-mojo blockchain fee:

```
chia wallet coins combine --fingerprint 2121994410 --id 1 --max-dust-amount 0.0000000001 --fee 0.000000000001
```

Response:

```bash
Combining 20 coins.
Would you like to Continue? (y/n): y
Transaction sent: 1b32a7f42c88b70924e3ec70d2a377b2b5c5f28de14736a3e2b5d411dec98c06
To get status, use command: chia wallet get_transaction -f 2121994410 -tx 0x1b32a7f42c88b70924e3ec70d2a377b2b5c5f28de14736a3e2b5d411dec98c06
```

Get the status of this command:

```bash
chia wallet get_transaction -f 2121994410 -tx 0x1b32a7f42c88b70924e3ec70d2a377b2b5c5f28de14736a3e2b5d411dec98c06
```

Result:

```bash
Transaction 1b32a7f42c88b70924e3ec70d2a377b2b5c5f28de14736a3e2b5d411dec98c06
Status: Confirmed
Amount sent: 1.99E-10 XCH
To address: xch1799u8mjkq4wt6t3avgcfxqk56qcwkx2dv9rw9q2yahm8taq4jwcqxaqd6m
Created at: 2022-11-30 09:59:09
```

After the transaction has been confirmed, show all coins once again:

```bash
chia wallet coins list --fingerprint 2121994410 --id 1
```

The twenty 10-mojo coins have been combined into a single coin worth 199 mojos (1 mojo was paid as a blockchain fee):

```bash
There are a total of 5 coins in wallet 1.
5 confirmed coins.
0 unconfirmed additions.
0 unconfirmed removals.
Confirmed coins:
Coin ID: 0x72ad2d9898be2c6c6f10790239f50ca1dcdb00aff73592d22a163ed965bf5b1b
        Address: xch1fev2qaclwpcue9kx4p39dzfxpzaavvcz5v3lhx77cxha7f0tjjlsngh5k0 Amount: 0.196499999999 xch (196499999999 mojo), Confirmed in block: 2822660

Coin ID: 0x5c7060b49c53c4febc1278ef50bee81af4c53ea5fea6d30efb4dbb436321815c
        Address: xch1fev2qaclwpcue9kx4p39dzfxpzaavvcz5v3lhx77cxha7f0tjjlsngh5k0 Amount: 1e-09 xch (1000 mojo), Confirmed in block: 2867748

Coin ID: 0xa6f4d73e4fda0eb7c04d6a83e10c5465d94786cd92920ec4ccc0e805ee573abb
        Address: xch1799u8mjkq4wt6t3avgcfxqk56qcwkx2dv9rw9q2yahm8taq4jwcqxaqd6m Amount: 7.99e-10 xch (799 mojo), Confirmed in block: 2892717

Coin ID: 0x029b8689abda7f4ff4871e1cd69eb32725a0cda8520b751bcf774fb681e19bc5
        Address: xch1fev2qaclwpcue9kx4p39dzfxpzaavvcz5v3lhx77cxha7f0tjjlsngh5k0 Amount: 1e-09 xch (1000 mojo), Confirmed in block: 2867783

Coin ID: 0x672d1dc2ffa2a17a920100f365388cb09d7a01b8b9f2efabb0ffbdab9f661dd3
        Address: xch1799u8mjkq4wt6t3avgcfxqk56qcwkx2dv9rw9q2yahm8taq4jwcqxaqd6m Amount: 1.99e-10 xch (199 mojo), Confirmed in block: 2895085
```

</details>

---

### `list`

Functionality: List all coins

Usage: chia wallet coins list [OPTIONS]

Options:

| Short Command | Long Command            | Type    | Required | Description                                                                                                       |
| :------------ | :---------------------- | :------ | :------- | :---------------------------------------------------------------------------------------------------------------- |
| -p            | --wallet-rpc-port       | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the `rpc_port` under `wallet` in config.yaml      |
| -f            | --fingerprint           | INTEGER | False    | Set the fingerprint to specify which wallet to use                                                                |
| -i            | --id                    | INTEGER | False    | Id of the wallet to use  [default: 1]                                                                             |
| -u            | --show_unconfirmed      | BOOLEAN | False    | Separately display unconfirmed coins [default: false]                                                             |
|               | --min-amount            | TEXT    | False    | Ignore coins worth less then this much (XCH or CAT units)                                                         |
|               | --max-amount            | TEXT    | False    | Ignore coins worth more then this much (XCH or CAT units)                                                         |
|               | --exclude-coin          | TEXT    | False    | Prevent this coin from being included (can be reused to exclude multiple coins)                                   |
|               | --exclude-amount        | TEXT    | False    | Exclude any coins with this amount from being included (can be reused to exclude multiple amounts)                |
|               | --paginate              | None    | False    | Prompt for each page of data. Defaults to enabled for interactive consoles, otherwise defaults to disabled        |
|               | --no-paginate           | None    | False    | Do not prompt for each page of data. Defaults to disabled for interactive consoles, otherwise defaults to enabled |
| -h            | --help                  | None    | False    | Show a help message and exit                                                                                      |

<details>
<summary>Example</summary>

```bash
chia wallet coins list --fingerprint 2121994410 --id 1
```

Response:

```
There are a total of 4 coins in wallet 1.
4 confirmed coins.
0 unconfirmed additions.
0 unconfirmed removals.
Confirmed coins:
Coin ID: 0x72ad2d9898be2c6c6f10790239f50ca1dcdb00aff73592d22a163ed965bf5b1b
        Address: xch1fev2qaclwpcue9kx4p39dzfxpzaavvcz5v3lhx77cxha7f0tjjlsngh5k0 Amount: 0.196499999999 xch (196499999999 mojo), Confirmed in block: 2822660

Coin ID: 0x4de8baf19566474a00126b9c0f31d779ccf541529263fc968c572e3ae4fb24cf
        Address: xch1fev2qaclwpcue9kx4p39dzfxpzaavvcz5v3lhx77cxha7f0tjjlsngh5k0 Amount: 1e-09 xch (1000 mojo), Confirmed in block: 2867755

Coin ID: 0x5c7060b49c53c4febc1278ef50bee81af4c53ea5fea6d30efb4dbb436321815c
        Address: xch1fev2qaclwpcue9kx4p39dzfxpzaavvcz5v3lhx77cxha7f0tjjlsngh5k0 Amount: 1e-09 xch (1000 mojo), Confirmed in block: 2867748

Coin ID: 0x029b8689abda7f4ff4871e1cd69eb32725a0cda8520b751bcf774fb681e19bc5
        Address: xch1fev2qaclwpcue9kx4p39dzfxpzaavvcz5v3lhx77cxha7f0tjjlsngh5k0 Amount: 1e-09 xch (1000 mojo), Confirmed in block: 2867783
```

</details>

---

### `split`

Functionality: Split up larger coins

Usage: chia wallet coins split [OPTIONS]

Options:

| Short Command | Long Command       | Type    | Required | Description                                                                                                  |
| :------------ | :----------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------- |
| -p            | --wallet-rpc-port  | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the `rpc_port` under `wallet` in config.yaml |
| -f            | --fingerprint      | INTEGER | False    | Set the fingerprint to specify which wallet to use                                                           |
| -i            | --id               | INTEGER | False    | ID of the wallet to use [default: 1]                                                                         |
| -n            | --number-of-coins  | INTEGER | False    | The number of coins we are creating                                                                          |
| -m            | --fee              | TEXT    | False    | Set the fees for the transaction, in XCH [default: 0]                                                        |
| -a            | --amount-per-coin  | TEXT    | True     | The amount of each newly created coin, in XCH                                                                |
| -t            | --target-coin-id   | TEXT    | True     | The coin id of the coin we are splitting                                                                     |
| -h            | --help             | None    | False    | Show a help message and exit                                                                                 |

<details>
<summary>Example</summary>

First, list the coins available:

```bash
chia wallet coins list --fingerprint 2121994410 --id 1
```

Response:

```
There are a total of 4 coins in wallet 1.
4 confirmed coins.
0 unconfirmed additions.
0 unconfirmed removals.
Confirmed coins:
Coin ID: 0x72ad2d9898be2c6c6f10790239f50ca1dcdb00aff73592d22a163ed965bf5b1b
        Address: xch1fev2qaclwpcue9kx4p39dzfxpzaavvcz5v3lhx77cxha7f0tjjlsngh5k0 Amount: 0.196499999999 xch (196499999999 mojo), Confirmed in block: 2822660

Coin ID: 0x4de8baf19566474a00126b9c0f31d779ccf541529263fc968c572e3ae4fb24cf
        Address: xch1fev2qaclwpcue9kx4p39dzfxpzaavvcz5v3lhx77cxha7f0tjjlsngh5k0 Amount: 1e-09 xch (1000 mojo), Confirmed in block: 2867755

Coin ID: 0x5c7060b49c53c4febc1278ef50bee81af4c53ea5fea6d30efb4dbb436321815c
        Address: xch1fev2qaclwpcue9kx4p39dzfxpzaavvcz5v3lhx77cxha7f0tjjlsngh5k0 Amount: 1e-09 xch (1000 mojo), Confirmed in block: 2867748

Coin ID: 0x029b8689abda7f4ff4871e1cd69eb32725a0cda8520b751bcf774fb681e19bc5
        Address: xch1fev2qaclwpcue9kx4p39dzfxpzaavvcz5v3lhx77cxha7f0tjjlsngh5k0 Amount: 1e-09 xch (1000 mojo), Confirmed in block: 2867783
```

Next, split a 1000-mojo coin. Include a 1-mojo fee, and create twenty 10-mojo coins with unique addresses:

```bash
chia wallet coins split --fingerprint 2121994410 --id 1 --fee 0.000000000001 --amount-per-coin 0.00000000001 --number-of-coins 20 --target-coin-id 0x4de8baf19566474a00126b9c0f31d779ccf541529263fc968c572e3ae4fb24cf
```

Result:

```
Transaction sent: 4257f284ee43b546259c2754bf7e24836fa5c93383a5f4757a20b9f4c51bca5a
To get status, use command: chia wallet get_transaction -f 2121994410 -tx 0x4257f284ee43b546259c2754bf7e24836fa5c93383a5f4757a20b9f4c51bca5a
```

View the result of the transaction:

```
chia wallet get_transaction -f 2121994410 -tx 0x4257f284ee43b546259c2754bf7e24836fa5c93383a5f4757a20b9f4c51bca5a
```

Result:

```
Transaction 4257f284ee43b546259c2754bf7e24836fa5c93383a5f4757a20b9f4c51bca5a
Status: Confirmed
Amount sent: 2E-10 XCH
To address: xch1sncvgskpa5wuhmdr64rp5ekcjy2wxzk8v03ce8cyqnfcpp4t7z3qv80y2h
Created at: 2022-11-29 21:47:23
```

Finally, show the coins again after splitting:

```bash
chia wallet coins list --fingerprint 2121994410 --id 1
```

There are now 20 coins worth 10 mojos each, and one worth 799. The missing mojo was subtracted as a transaction fee:

```bash
There are a total of 24 coins in wallet 1.
24 confirmed coins.
0 unconfirmed additions.
0 unconfirmed removals.
Confirmed coins:
Coin ID: 0xa22cd5e34c89b2377f4bb7e002847adcb066cd7cc8b58fda257662b9ee04bea0
        Address: xch100gjrhex97qg7uc7lgnnwu3xgrxnxa7fajpfeh6z7925455qz2vsd2qcql Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x2af0762e0d9d80164c2582e4f49e1b6f00b62756075c6677dc1f6054ddcc55b5
        Address: xch1vnzcrs37lrta5ty88shf6ew5hnexvptetzk4pjthad4jnhptsmfqslltea Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0xb4aa54a954b5eac869c612c018d61a7b441ed39fedf9adaea8608acc368c5066
        Address: xch1lhnmyhn3w58kxj49vxuv2rxkyvpwaukjfhr5cnpl02jl0pdpzqqqf90mws Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0xcc1ad94d7e5a27e3562b4867451b9c0203c0d674baf2be2cff49a9fdf9eb7736
        Address: xch1a98gxner58d2q8vj07yzyzg3m93209u8sa8lrz0s8twhdundducsmccz55 Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0xc800fcab9aaa708f2e6ce966f1b397bb1f53ee543f4ce0408416237312d5e0ea
        Address: xch1u7xprttzcp0grk4fjmcy0a46dl6l925fypgyyslt8q5akl9s7pds5q79nh Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0xbb2d420a64fc778b9a225c7f814a09e0b3dc564a64ecd7de173e8450ca74ab41
        Address: xch1vmkp8xffq59jjtkvrdhhylc8mfle86zxulnhr2r64dvs9hunh4zqhn7djg Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x51f8065bf8f39d08898446c17cf655b196c1146bf4c4c6dacd4f2e71cfcb8b1a
        Address: xch1meq05gnw8pfyq03625rgtezr3whcntqu3m0ej0xmenxy58r7zalqjxxs3d Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x72ad2d9898be2c6c6f10790239f50ca1dcdb00aff73592d22a163ed965bf5b1b
        Address: xch1fev2qaclwpcue9kx4p39dzfxpzaavvcz5v3lhx77cxha7f0tjjlsngh5k0 Amount: 0.196499999999 xch (196499999999 mojo), Confirmed in block: 2822660

Coin ID: 0x5c7060b49c53c4febc1278ef50bee81af4c53ea5fea6d30efb4dbb436321815c
        Address: xch1fev2qaclwpcue9kx4p39dzfxpzaavvcz5v3lhx77cxha7f0tjjlsngh5k0 Amount: 1e-09 xch (1000 mojo), Confirmed in block: 2867748

Coin ID: 0x40e3eadbf20bf34de22480c892cbb689dfbd822e9656d3712d82b7473eb7e273
        Address: xch1q92f496rvwlzpau8qd2pj5gjflnssl9j0947x8cap40j4qh9jkwqd6rp4v Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x83ff6c33a944d48d6ab38331163454b6a5d7434221e0c5d60675043eaf947242
        Address: xch1xacs6cpmun7k3sm62dqly5kasdamyswhh6jfjhyng29lp8732zesglas0n Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x88e475174ee655938e9b26a2705fb30452fc533f30b0999485ccd1084aa055a9
        Address: xch1sncvgskpa5wuhmdr64rp5ekcjy2wxzk8v03ce8cyqnfcpp4t7z3qv80y2h Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x68e11af90b3e4dbd80da8b405af9e6717631209bacadbb2bcea405225b39c633
        Address: xch1tmfclgxwysh9pa5rg9p49k2z67je7agns7m29xmpy03ajy7fdjmse4ff6f Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0xa6f4d73e4fda0eb7c04d6a83e10c5465d94786cd92920ec4ccc0e805ee573abb
        Address: xch1799u8mjkq4wt6t3avgcfxqk56qcwkx2dv9rw9q2yahm8taq4jwcqxaqd6m Amount: 7.99e-10 xch (799 mojo), Confirmed in block: 2892717

Coin ID: 0x029b8689abda7f4ff4871e1cd69eb32725a0cda8520b751bcf774fb681e19bc5
        Address: xch1fev2qaclwpcue9kx4p39dzfxpzaavvcz5v3lhx77cxha7f0tjjlsngh5k0 Amount: 1e-09 xch (1000 mojo), Confirmed in block: 2867783

Coin ID: 0x282829e2f79bbdf8b422ec46dcd91a4b3cb06e62958ce65d1b65def22ff9314f
        Address: xch1wsklujnv47uxafhnevq46evghj02kly25scg9dnfu09l5neq9cfs4fqfdc Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x7d5dc84c5b1ff8c2be3cae00e7e816fd731e42d4a1ca16edaf30b2478d72385b
        Address: xch1rm0ruksu45mq2dwr4dt55nks7dhe3pkhlfxssd9yaampgk7ujscq4vx4t4 Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x62f52d45a7410383c843b4da7d64697ceeab53ab74697f8c038cc2d4380443c7
        Address: xch1p9dmd6a34a83vly9rkvc5m4e5dsapw96fngqhcfjg608m9chcy6qg67mrf Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x09ebdda27f459887dd6886768eb5e9eb49e49474841d609e7db641779e008dd0
        Address: xch1crfal449k3252aez4z4sqy0p7u7cx5pvs67yh4fq6sftl8fmgnsqhsak54 Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x79ae16705903cb0c345040d9f57355952c440413fb256e84bcac75160cd74032
        Address: xch1qrn3yjn3m030ugdm0jtumds4ctd2pcm6em8843rqn9fn4dc728esl89tk3 Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x47ef42d080ce312f72d2ab8d1a21d181b3982b2d44577664208413eb76458474
        Address: xch195p7grrra9a9c5p6m3pj3zaq59np5dsafpf9v7jvtqfg5alrvc3qf8d9qw Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0xa39916e6b797a2eae47f1eaee3b291d3cbe486b15093b46171eb312e0b5e4d05
        Address: xch1fpgqnygrq7ahgq595pf0mar4tzg6xn0muk8vx7f9kxfpppa6edcqn3l2xa Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x6db6fe7cf539437880ab2b5f622ff93f38da3665a0009bde69fa7c699fe37b88
        Address: xch1y9qkpseasyqq5lqca7vdh07a86lc3fkdvwq5r00h6h5mvja578eq5t8gvp Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717

Coin ID: 0x7d22a9476247307e56614208bfb748cba1c9c0d0f25236a0c755f66412c767a0
        Address: xch1ty5e0jsxmsn8vzrs95dwu7ufl292gq9xar235weeqhvdk78syrzsy2vjap Amount: 1e-11 xch (10 mojo), Confirmed in block: 2892717
```
</details>

---

## `delete_unconfirmed_transactions`

Functionality: Deletes all unconfirmed transactions for this wallet ID

Usage: chia wallet delete_unconfirmed_transactions [OPTIONS]

Options:

| Short Command | Long Command      | Type    | Required | Description                                                                                                  |
| :------------ | :---------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the `rpc_port` under `wallet` in config.yaml |
| -i            | --id              | INTEGER | False    | ID of the wallet to use  [default: 1]                                                                        |
| -f            | --fingerprint     | INTEGER | False    | Set the fingerprint to specify which wallet to use                                                           |
| -h            | --help            | None    | False    | Show a help message and exit                                                                                 |

<details>
<summary>Example</summary>

```bash
chia wallet delete_unconfirmed_transactions --fingerprint 2121994410
```

Response:

```
Successfully deleted all unconfirmed transactions for wallet id 1 on key 2121994410
```

</details>

---

## `get_address`

Functionality: Get a wallet receive address

Usage: chia wallet get_address [OPTIONS]

Options:

| Short Command | Long Command      | Type    | Required | Description                                                                                                  |
| :------------ | :---------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the `rpc_port` under `wallet` in config.yaml |
| -i            | --id              | INTEGER | False    | ID of the wallet to use  [default: 1]                                                                        |
| -f            | --fingerprint     | INTEGER | False    | Set the fingerprint to specify which wallet to use                                                           |
| -n            | --new-address     | None    | False    | Create a new wallet receive address [default: disabled]                                                      |
| -l            | --latest-address  | None    | False    | Show the most recently created wallet receive address  [default: enabled]                                    |
| -h            | --help            | None    | False    | Show a help message and exit                                                                                 |

<details>
<summary>Example</summary>

Get a new address:

```bash
chia wallet get_address --fingerprint 2121994410 --new-address
```

Response:

```
xch1jp5thqu3dhwkvvh5p77lvlackddrd9q2zpt58zs6yqr2c4yvregs69ayqr
```

</details>

---

## `get_derivation_index`

Functionality: Get the last puzzle hash derivation path index

Usage: chia wallet get_derivation_index [OPTIONS]

Options:

| Short Command | Long Command      | Type    | Required | Description                                                                                                  |
| :------------ | :---------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the `rpc_port` under `wallet` in config.yaml |
| -f            | --fingerprint     | INTEGER | False    | Set the fingerprint to specify which wallet to use                                                           |
| -h            | --help            | None    | False    | Show a help message and exit                                                                                 |

<details>
<summary>Example</summary>

```bash
chia wallet get_derivation_index --fingerprint 2121994410
```

Response:

```
Last derivation index: 346
```

</details>

---

## `get_transaction`

Functionality: Get a transaction

Usage: chia wallet get_transaction [OPTIONS]

Options:

| Short Command | Long Command      | Type    | Required | Description                                                                                                  |
| :------------ | :---------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the `rpc_port` under `wallet` in config.yaml |
| -f            | --fingerprint     | INTEGER | False    | Set the fingerprint to specify which wallet to use                                                           |
| -i,           | --id              | INTEGER | False    | ID of the wallet to use [default: 1]                                                                         |
| -tx           | --tx_id           | TEXT    | True     | Transaction id to search for                                                                                 |
| -v            | --verbose         | None    | False    | Show verbose output [default: disabled]                                                                      |
| -h            | --help            | None    | False    | Show a help message and exit                                                                                 |

<details>
<summary>Example</summary>

```bash
chia wallet get_transaction --fingerprint 2121994410 --tx_id 1b32a7f42c88b70924e3ec70d2a377b2b5c5f28de14736a3e2b5d411dec98c06
```

Response:

```
Transaction 1b32a7f42c88b70924e3ec70d2a377b2b5c5f28de14736a3e2b5d411dec98c06
Status: Confirmed
Amount sent: 1.99E-10 XCH
To address: xch1799u8mjkq4wt6t3avgcfxqk56qcwkx2dv9rw9q2yahm8taq4jwcqxaqd6m
Created at: 2022-11-30 09:59:09
```

</details>

---

## `get_transactions`

Functionality: Get all transactions

Usage: chia wallet get_transactions [OPTIONS]

Options:

| Short Command | Long Command        | Type    | Required | Description                                                                                                       |
| :------------ | :------------------ | :------ | :------- | :---------------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port   | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the `rpc_port` under `wallet` in config.yaml      |
| -f            | --fingerprint       | INTEGER | False    | Set the fingerprint to specify which wallet to use                                                                |
| -i            | --id                | INTEGER | False    | ID of the wallet to use [default: 1]                                                                              |
| -o            | --offset            | INTEGER | False    | Skip transactions from the beginning of the list [default: 0]                                                     |
| -l            | --limit             | INTEGER | False    | Max number of transactions to return [default: 4294967295]                                                        |
| -v            | --verbose           | None    | False    | Show verbose output [default: disabled]                                                                           |
|               | --paginate          | None    | False    | Prompt for each page of data. Defaults to enabled for interactive consoles, otherwise defaults to disabled        |
|               | --no-paginate       | None    | False    | Do not prompt for each page of data. Defaults to disabled for interactive consoles, otherwise defaults to enabled |
|               | --sort-by-height    | None    | False    | Sort transactions by height [default: disabled]                                                                   |
|               | --sort-by-relevance | None    | False    | Sort transactions by {confirmed \| height \| time} [default: disabled]                                            |
|               | --reverse           | None    | False    | Reverse the transaction ordering [default: disabled]                                                              |
| -h            | --help              | None    | False    | Show a help message and exit                                                                                      |

<details>
<summary>Example</summary>

Skip the first five transactions don't paginate:

```bash
chia wallet get_transactions --fingerprint 2121994410 --offset 5 --no-paginate
```

Response:

```
Transaction 72ad2d9898be2c6c6f10790239f50ca1dcdb00aff73592d22a163ed965bf5b1b
Status: Confirmed
Amount received: 0.196499999999 XCH
To address: xch1fev2qaclwpcue9kx4p39dzfxpzaavvcz5v3lhx77cxha7f0tjjlsngh5k0
Created at: 2022-11-14 17:58:13

Transaction b04d739fd6a2735662e5741c94a526202e7ce695f1b720b912e575928ede0fc7
Status: Confirmed
Amount sent: 0.1035 XCH
To address: xch1ht3yzch0h4tglzdu0g6q0x9xzxxlqxy7h83ls6tme63847vl3ausarq3ma
Created at: 2022-11-14 17:58:13

Transaction eb3d20f16f8f2b3661058fe0c4658abb95b440ab380a273ba4f867af255f2ca7
Status: Confirmed
Amount received: 0.3 XCH
To address: xch1aqg54tdk0lqxp8yhq2jlqyce3heevltpztm8939w5xvpwt8tyfkschugt0
Created at: 2022-11-14 17:44:03
```

</details>

---

## notifications:

Functionality: Send, receive, and delete wallet notifications

### `delete`

Functionality: Delete notification(s) that are in your wallet

Usage: chia wallet notifications delete [OPTIONS]

Options:

| Short Command | Long Command      | Type    | Required | Description                                                                                                  |
| :------------ | :---------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the `rpc_port` under `wallet` in config.yaml |
| -f            | --fingerprint     | INTEGER | False    | Set the fingerprint to specify which wallet to use                                                           |
| -i            | --id              | TEXT    | False    | A specific notification ID to delete                                                                         |
|               | --all             | None    | False    | All notifications can be deleted (they will be recovered during resync) [default: disabled]                  |
| -h            | --help            | None    | False    | Show a help message and exit                                                                                 |

<details>
<summary>Example</summary>

Delete all notifications:

```bash
chia wallet notifications delete --fingerprint 2121994410  --all
```

Response:

```
Success: True
```

</details>

---

### `get`

Functionality: Get notification(s) that are in your wallet

Usage: chia wallet notifications get [OPTIONS]

Options:

| Short Command | Long Command      | Type    | Required | Description                                                                                                  |
| :------------ | :---------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the `rpc_port` under `wallet` in config.yaml |
| -f            | --fingerprint     | INTEGER | False    | Set the fingerprint to specify which wallet to use                                                           |
| -i            | --id              | TEXT    | False    | The specific notification ID to show                                                                         |
| -s            | --start           | INTEGER | False    | The number of notifications to skip                                                                          |
| -e            | --end             | INTEGER | False    | The number of notifications to stop at                                                                       |
| -h            | --help            | None    | False    | Show a help message and exit                                                                                 |

:::info

To set up your wallet to receive notifications, follow [these instructions](/faq#how-do-i-configure-my-system-to-send-and-receive-notifications)

:::

<details>
<summary>Example</summary>

```bash
chia wallet notifications get --fingerprint 2121994410
```

Response:

```
ID: d844464f871a468c008dd76b882214403f6aaa2e19bd1ab549e4423406202f55
message: This is a test message
amount: 10000000
```

</details>

---

### `send`

Functionality: Send a notification to the owner of an address

Usage: chia wallet notifications send [OPTIONS]

Options:

| Short Command | Long Command      | Type    | Required | Description                                                                                                  |
| :------------ | :---------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the `rpc_port` under `wallet` in config.yaml |
| -f            | --fingerprint     | INTEGER | False    | Set the fingerprint to specify which wallet to use                                                           |
| -t            | --to-address      | TEXT    | True     | The address to send the notification to                                                                      |
| -a            | --amount          | TEXT    | False    | The amount to send to get the notification past the recipient's spam filter [default: 0.00001]               |
| -n            | --message         | TEXT    | True     | The message of the notification                                                                              |
| -m            | --fee             | TEXT    | False    | The fee for the transaction                                                                                  |
| -h            | --help            | None    | False    | Show a help message and exit                                                                                 |

<details>
<summary>Example</summary>

Send a test notification:

```bash
chia wallet notifications send --fingerprint 3792481086 --to-address xch1jp5thqu3dhwkvvh5p77lvlackddrd9q2zpt58zs6yqr2c4yvregs69ayqr --message "This is a test message" --fee 0.000000000001
```

Response:

```
Notification sent successfully.
```

</details>

---

## `send`

Functionality: Send chia to another wallet

Usage: chia wallet send [OPTIONS]

Options:

| Short Command | Long Command       | Type    | Required | Description                                                                                                  |
| :------------ | :----------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port  | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the `rpc_port` under `wallet` in config.yaml |
| -f            | --fingerprint      | INTEGER | False    | Set the fingerprint to specify which wallet to use                                                           |
| -i            | --id               | INTEGER | False    | ID of the wallet to use  [default: 1]                                                                        |
| -a            | --amount           | TEXT    | True     | How much chia to send, in XCH                                                                                |
| -e            | --memo             | TEXT    | False    | Additional memo for the transaction                                                                          |
| -m            | --fee              | TEXT    | False    | Set the fees for the transaction, in XCH [default: 0]                                                        |
| -t            | --address          | TEXT    | True     | Address to send the XCH                                                                                      |
| -o            | --override         | None    | False    | Submits transaction without checking for unusual values [default: disabled]                                  |
| -ma           | --min-coin-amount  | TEXT    | False    | Ignore coins worth less then this much (XCH or CAT units)                                                    |
| -l            | --max-coin-amount  | TEXT    | False    | Ignore coins worth more then this much (XCH or CAT units)                                                    |
| -e            | --exclude-coin-ids | TEXT    | False    | Exclude this coin from being spent                                                                           |
| -h            | --help             | None    | False    | Show a help message and exit                                                                                 |

<details>
<summary>Example</summary>

Send 1000 mojos with a test memo:

```bash
chia wallet send --fingerprint 3792481086 --address xch1jp5thqu3dhwkvvh5p77lvlackddrd9q2zpt58zs6yqr2c4yvregs69ayqr --memo "This is a test memo" --fee 0.000000000001 --amount 0.000000001
```

Response:

```
Submitting transaction...
Transaction submitted to nodes: [{'peer_id': 'cda6b919f90af6f021ccf6ca748a30d03b22622863654b57bd74896dd60c4eca', 'inclusion_status': 'SUCCESS', 'error_msg': None}]
Run 'chia wallet get_transaction -f 3792481086 -tx 0x6fbac9409dbdef3cfa8a8fd82be88caef5be4547fe882c12d5b1ef0cbd17ecfe' to get status
```

</details>

---

## `show`

Functionality: Show wallet information

Usage: chia wallet show [OPTIONS]

Options:

| Short Command | Long Command      | Type    | Required | Description                                                                                                                                                                                                                                           |
| :------------ | :---------------- | :------ | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the `rpc_port` under `wallet` in config.yaml                                                                                                                                          |
| -f            | --fingerprint     | INTEGER | False    | Set the fingerprint to specify which wallet to use                                                                                                                                                                                                    |
| -w            | --wallet_type     | TEXT    | False    | Choose a specific wallet type to return, choose from the following: [standard_wallet \| atomic_swap \| authorized_payee \| multi_sig \| custody \| cat \| recoverable \| decentralized_id \| pooling_wallet \| nft \| data_layer \| data_layer_offer] |
| -h            | --help            | None    | False    | Show a help message and exit                                                                                                                                                                                                                          |

<details>
<summary>Example</summary>

```bash
chia wallet show --fingerprint 2121994410
```

Response:

```
Wallet height: 2896197
Sync status: Synced
Balances, fingerprint: 2121994410

Chia Wallet:
   -Total Balance:         0.196510003997 xch (196510003997 mojo)
   -Pending Total Balance: 0.196510003997 xch (196510003997 mojo)
   -Spendable:             0.196510003997 xch (196510003997 mojo)
   -Type:                  STANDARD_WALLET
   -Wallet ID:             1

NFT Wallet:
   -Total Balance:         0.0
   -Pending Total Balance: 0.0
   -Spendable:             0.0
   -Type:                  NFT
   -Wallet ID:             2

Spacebucks:
   -Total Balance:         0.0  (0 mojo)
   -Pending Total Balance: 0.0  (0 mojo)
   -Spendable:             0.0  (0 mojo)
   -Type:                  CAT
   -Asset ID:              a628c1c2c6fcb74d53746157e438e108eab5c0bb3e5c80ff9b1910b3e4832913
   -Wallet ID:             3

DataLayer Wallet:
   -Total Balance:         0.0
   -Pending Total Balance: 0.0
   -Spendable:             0.0
   -Type:                  DATA_LAYER
   -Wallet ID:             4
```

</details>

---

## `sign_message`

Functionality: Sign a message by a derivation address

Usage: chia wallet sign_message [OPTIONS]

Options:

| Short Command | Long Command      | Type    | Required | Description                                                                                                  |
| :------------ | :---------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the `rpc_port` under `wallet` in config.yaml |
| -f            | --fingerprint     | INTEGER | False    | Set the fingerprint to specify which wallet to use                                                           |
| -a            | --address         | TEXT    | True     | The address you want to use for signing                                                                      |
| -m            | --hex_message     | TEXT    | True     | The hex message you want sign                                                                                |
| -h            | --help            | None    | False    | Show a help message and exit                                                                                 |

<details>
<summary>Example</summary>

```bash
chia wallet sign_message --fingerprint 2121994410 --address xch1jp5thqu3dhwkvvh5p77lvlackddrd9q2zpt58zs6yqr2c4yvregs69ayqr --hex_message 0xdeadbeef
```

Response:

```
Message: 0xdeadbeef
Public Key: b1632788b1384508103e9714336f99c50fd08fc025ebf637f6f386967469750edc8f91cb2da843ece824e7f052e4f349
Signature: 8b198ebfd05569ec1d06abc2bc9625e9361b5cf9837693cbc4ce3113de6c13d5528739c488e400444696d3fd169e666a0ed3498547aa5bcdfe15793ac8336505043fa393c063ae2756c1eedfadd82dbc50808f2f50b15724eba4e46ae1001225
```

</details>

---

## `update_derivation_index`

Functionality:  Generate additional derived puzzle hashes starting at the provided index

Usage: chia wallet update_derivation_index [OPTIONS]

Options:

| Short Command | Long Command      | Type    | Required | Description                                                                                                  |
| :------------ | :---------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------- |
| -wp           | --wallet-rpc-port | INTEGER | False    | Set the port where the Wallet is hosting the RPC interface. See the `rpc_port` under `wallet` in config.yaml |
| -f            | --fingerprint     | INTEGER | False    | Set the fingerprint to specify which wallet to use                                                           |
| -i            | --index           | INTEGER | True     | Index to set. Must be greater than the current derivation index                                              |
| -h            | --help            | None    | False    | Show a help message and exit                                                                                 |

<details>
<summary>Example</summary>

```bash
chia wallet update_derivation_index --fingerprint 2121994410 --index 475
```

Response:

```
Updating derivation index... This may take a while.
Updated derivation index: 475
Your balances may take a while to update.
```

</details>

---