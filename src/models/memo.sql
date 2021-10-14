select p.id,
       p.name,
       p.price,
       p.thumbnail_url,
       p.sub_category_id,
       max(pi.id),
       pi.image_url,
       sc.main_category_id
from products p 
left join product_images pi
on p.id = pi.product_id
left join sub_categories sc
on p.sub_category_id = sc.id
group by p.id;






SELECT
    p.id,
    p.name,
    p.price,
    p.thumbnail_url as thumbnailUrl,
    p.created_at as createdAt,
    p.sub_category_id as subCategoryId
  FROM products p;
  order by ${query}





SELECT
  p.id,
  sc.id,
  p.name,
  p.price,
  p.thumbnail_url as thumbnailUrl,
  pi.image_url as imageUrl,
  p.created_at as createdAt
  FROM sub_categories sc
  JOIN products p
  ON p.sub_category_id = sc.id
  JOIN product_images pi
  ON p.id = pi.product_id
  order by name;

