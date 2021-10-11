INSERT INTO 테이블명 (컬럼명1, 컬럼명2, ... ) VALUES (데이터1, 데이터1, ... ), (데이터2, 데이터2, ... );

-- users
INSERT INTO users VALUES (default, '창욱', 'wecode123', 'pass', 'email', '010-0101-0101', 1, 1, 1, 1, default, default);
INSERT INTO users VALUES (default, '김시원', 'k-cool', '1234', 'k-cool@gmail.com', '010-1234-1234', 1, 1, 1, 1, default, default);
INSERT INTO users VALUES (default, '성지수', 'jisuSeong', '1234', 'jisuSeong@gmail.com', '010-1234-1234', 1, 1, 1, 1, default, default);

-- main_categories
INSERT INTO main_categories VALUES (default, 'All');
INSERT INTO main_categories VALUES (default, 'Stationery');
INSERT INTO main_categories VALUES (default, 'Digital');
INSERT INTO main_categories VALUES (default, 'Fabric & Living');
INSERT INTO main_categories VALUES (default, 'ACC');
INSERT INTO main_categories VALUES (default, 'EVENT');

-- sub_categories
INSERT INTO sub_categories VALUES (default, 'All', 1);
INSERT INTO sub_categories VALUES (default, 'New', 1);
INSERT INTO sub_categories VALUES (default, 'Best', 1);
INSERT INTO sub_categories VALUES (default, 'Postcard', 2);
INSERT INTO sub_categories VALUES (default, 'Notebook', 2);
INSERT INTO sub_categories VALUES (default, 'Memo Pad', 2);
INSERT INTO sub_categories VALUES (default, 'Poster', 2);
INSERT INTO sub_categories VALUES (default, 'Tape', 2);
INSERT INTO sub_categories VALUES (default, 'Tatoo Sticker', 2);
INSERT INTO sub_categories VALUES (default, 'Sticker', 2);
INSERT INTO sub_categories VALUES (default, 'Diary', 2);
INSERT INTO sub_categories VALUES (default, 'Calendar', 2);
INSERT INTO sub_categories VALUES (default, 'Etc', 2);
INSERT INTO sub_categories VALUES (default, 'AirPods Case', 3);
INSERT INTO sub_categories VALUES (default, 'AirPods Pro Case', 3);
INSERT INTO sub_categories VALUES (default, 'Griptok', 3);
INSERT INTO sub_categories VALUES (default, 'Phone Case', 3);
INSERT INTO sub_categories VALUES (default, 'Etc', 3);
INSERT INTO sub_categories VALUES (default, 'Case / Pouch', 3);
INSERT INTO sub_categories VALUES (default, 'Buds Case', 3);
INSERT INTO sub_categories VALUES (default, 'Cup', 4);
INSERT INTO sub_categories VALUES (default, 'Fabric', 4);
INSERT INTO sub_categories VALUES (default, 'Pouch', 4);
INSERT INTO sub_categories VALUES (default, 'Bag', 4);
INSERT INTO sub_categories VALUES (default, 'Fashion', 4);
INSERT INTO sub_categories VALUES (default, 'Pet', 4);

--production_imforms
INSERT INTO production_informs VALUES (default, '중국', '크다란 스튜디오', '크다란 스튜디오', 1);


--products
INSERT INTO products VALUES (default, '뭉뭉이 배개', 300000, 2, 78, 
'https://cdn.pixabay.com/photo/2015/12/08/00/52/puppy-1082141__480.jpg', 
'https://cdn.pixabay.com/photo/2015/12/08/00/52/puppy-1082141__480.jpg', 
default, default, 4, 1);

-- reviews
INSERT INTO reviews VALUES (default, 2, 2, 4, '사진보다 실물이 더 귀여운거 같아요~ >_<', default, default);
INSERT INTO reviews VALUES (default, 1, 2, 5, '졸.귀.탱', default, default);
INSERT INTO reviews VALUES (default, 3, 2, 5, '재구매 의사 있습니다!', default, default);
INSERT INTO reviews VALUES (default, 2, 2, 3, '두번째 샀는데 좀 질리네요 -_-', default, default);
INSERT INTO reviews VALUES (default, 1, 2, 3, '두번째 샀는데 좀 질리네요 -_-', default, default);
INSERT INTO reviews VALUES (default, 2, 2, 3, '두번째 샀는데 좀 질리네요 -_-', default, default);
INSERT INTO reviews VALUES (default, 3, 2, 3, '두번째 샀는데 좀 질리네요 -_-', default, default);



--getAllReviews
SELECT * FROM reviews 
ORDER BY created_at DESC
${ea && `LIMIT ${ea}`};