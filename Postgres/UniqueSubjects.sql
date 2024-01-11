-- Write your PostgreSQL query statement below

-- Write a solution to calculate the number of unique subjects each teacher teaches in the university.
-- Return the result table in any order.
-- The result format is shown in the following example.

SELECT teacher_id,  COUNT(DISTINCT subject_id) as cnt
FROM Teacher
GROUP BY teacher_id
ORDER BY teacher_id;