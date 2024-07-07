# Project Details

Based on website https://www.wwe.com

I took the home page (relevant for 7/7/24), shows page, superstars page, individual superstar pages,
title pages and 2 shows pages.
Some of the links in the project lead to external links in the real wwe.com website. The links to the 
pages that I made leading to the localhost.

## Tables in MySql:

- wwe.users:
            id, first_name, last_name, email, password, marketing

            admin: '1', 'WWE', 'Admin', 'admin@wwe.com', 'admin123', '0'

- wwe.superstars:
id, name, height, weight, hometown, signature_move, career_highlights, img_url, title, brand_id

- wwe.brands:
id, name, img_url, brand_header

- wwe.titles:
id, name, img_url, current_holder, years_active, header_url

- wwe.title_history:
id, title_id, superstar_id, date_won, date_lost
