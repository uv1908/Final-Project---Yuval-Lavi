# WWE Project

<div display="flex">
<img src="wweProjectImages\home_page_with_navBar.png" width = "700">
<img src="wweProjectImages\superstars_page_header_and_champions.png" width = "700">
<img src="wweProjectImages\superstars.png" width = "700">
<img src="wweProjectImages\superstar_page.png" width = "700">
<img src="wweProjectImages\title_page.png" width = "700">

## Overview

Based on website https://www.wwe.com

I took the home page (relevant for 7/7/24), shows page, superstars page, individual superstar pages,
title pages and 2 shows pages.

I've made a database with tables of Users, Superstars, Brands, Titles and Title histories. Each table includes all information regarding the type such as name, unique id, image urls and more.

When fetching title_history I use a function to bring the number of days a champion held the title, in case of current champion, it will return the number of days passed from the date won to the current data, so it is adding a day every day.

Some of the links in the project lead to external links in the real https://www.wwe.com website. The links to the pages that I made leading to the localhost.

I have added a folder with preview images of the site at wweProjectImages folder.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

## Setup Instructions

### Step 1: Clone the Repository

Clone the repository to your local machine using the following command:

```sh
git clone https://github.com/uv1908/Final-Project---Yuval-Lavi.git
cd Final-Project---Yuval-Lavi
```

### Step 2: Install Dependencies

```sh
npm install
```

### Step 3: Set Up the MySQL Database

```
CREATE DATABASE wwe;
USE wwe;

Import my SQL files

mysql -u root -p wwe < WWEMySqlDatabase/wwe.users.sql
mysql -u root -p wwe < WWEMySqlDatabase/wwe.superstars.sql
mysql -u root -p wwe < WWEMySqlDatabase/wwe.brands.sql
mysql -u root -p wwe < WWEMySqlDatabase/wwe.titles.sql
mysql -u root -p wwe < WWEMySqlDatabase/wwe.title_history.sql
```

### Step 5: Run Application

```
npm start
```

### Finally

Open http://localhost:3000 on your browser



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
