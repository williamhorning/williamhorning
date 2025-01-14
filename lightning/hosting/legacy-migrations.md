# Legacy Migrations

Since lightning is still beta software, there is a fair amount of change between
releases. However, it's possible to migrate data between different versions of
Lightning. Below, we have a table detailing the different migration paths
between specific versions:

| version range                         | steps necessary (see below) | database(s)     |
| ------------------------------------- | --------------------------- | --------------- |
| ≤0.4.13 (`4396ee5` on tag 0.4.13)     | strategy 1                  | MongoDB         |
| 0.5.0 (`72dbdc2`) - 0.6.2 (`f091ad7`) | strategy 2                  | MongoDB + Redis |
| 0.7.0 (`dedb7b2`) - 0.7.2 (`e5ac407`) | strategy 3                  | Redis           |
| 0.7.3 (`9e677ea`) - 0.7.4 (`029aab7`) | automatic migrations        | Redis           |
| 0.8.0+                                | automatic migrations        | any supported   |

## Strategies

### 1 - Start on 0.6.2

For any data from 0.4.x or lower, you'll need to first upgrade your config and
hosting to work with 0.6.2. To do this, you will need to configure a Redis
server in addition to the MongoDB database you already have. Once you have done
that, you can run `lightning migrations`. If you used the normal bridge
commands, choose `Four` when asked what version you're migrating from. If you
used the beta bridges (which required manual setup ), choose `FourBeta`. When
asked which version you would like to migrate to, choose `Five` when prompted.
If you want to migrate to a version newer than 0.6.2, go to strategy 2.

### 2 - Start on 0.7.2

For any data in the `Five` format (0.5.0-0.6.2), you will need to upgrade your
config and hosting to work with 0.7.2. Once you do that, you will need to run
`lightning migrations` twice. Enter your Redis connection information both times

On the first time, select yes when asked if you are migrating from MongoDB.
Enter your MongoDB connection information when prompted. When asked to write the
data to the database, respond with yes.

On the second time, select no when asked if you are migrating from MongoDB.
Select `Five` when asked which version you are migrating to. Select `Seven` when
asked which version you are migrating to. When asked to write the data to the
database, respond with yes.

After this, if you would like to migrate to a version newer than 0.7.2, go to
strategy 3.

### 3 - Start on 0.7.4

For any data from 0.7.0-0.7.2, you'll need to upgrade versions as you normally
would, then run `lightning migrations`. If prompted, enter your Redis connection
information and then proceed to select `Seven` followed by `SevenDotThree`. When
asked to write the data to the database, respond with yes. If you would like to
migrate to 0.8.0, read the section _Automatic Migrations_.

## Automatic Migrations

In 0.8.0 (the most recent release as of writing), migrations from 0.7.4 will be 
handled automatically. This means that as long as you use the Redis option for 
the database, your data will be moved over automatically.
