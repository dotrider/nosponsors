CREATE TABLE users(
user_id SERIAL PRIMARY KEY,
username VARCHAR(20) NOT NULL,
password TEXT NOT NULL,
email VARCHAR(50) NOT NULL,
profile_pic TEXT DEFAULT 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4NDhANCgoKDQ8PDQ4ODQ0PDQ8ODQ0PFREXFhcRExMYHCggGBolGxMTITEhJSkrLi4uFx8zRDMtNzQ3LjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAgEH/8QALhABAAIAAwQKAgMBAQAAAAAAAAECAwQRITFBUQUSMjNhcXKBscEikUKh0WIj/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7w8C9uzSfPdCaMhif8R7z/gKwtTkL86T7z/iHEy9676T5xtBGAAAAAAAAAAAAAAAAAAAAAAD3DpNpiK75B7h4c3nSsa/TSwMnWu235T47kmBgxSNI955pQAAAAQY2VrfhpPOGbjYNqTpaPKeEtlxi4cWjS0AxR3j4U0t1Z9p5w4AAAAAAAAAAAAAAAAAAB40ejsLZ1547I8mfEa7G3h16sREcIiAdAAAAAAAArZ7C61NY312x5cWU3Zhi4teraY5TIOQAAAAAAAAAAAAAAAAAd4Hbr6obTEwp0tE8phtgAAAAAAAAMjOx/6W9vhrsfNzriW89ARAAAAAAAAAAAAAAAAAA8bOWxOtSJ8NJ82OtZDG6s9WZ2W3eEg0wAAAAAAAc4lurEzPCNWJadZ1njMyvdI438Inxt/iiAAAAAAAAAAAAAAAAAAAADQyeb1/G86TwnmusJZwM5auy35R/cA1BXw83S38tPCdiaLRwmP2DoedaOcftDiZqld9ony2gnVc3mop+NdtvhXxs9M7KR1Y58VQCZ12yAAAAAAAAAAAAAAAAAAAACxhZO9t8dWPEFd40qZCsdqZn+k9ctSN1K/rUGM6iJ4Rb9S24rEboiHoMOYnjFv1LlvPJjXfEAwnrYtgUnfSv6Q3yFJ3TMf3AM0WcXJXru0tHhvVpjTZMTE8gAAAAAAAAAAAAAAAAEuXy9sSdmyOM8jLYM3tpwjfLWpSKxpWNIgEeBl603RrPOd6YAAAAAAAAAEWLg1vH5R78UoDJzOVmm3fXny80DctGsaSy85l+pOsdmd3h4ArgAAAAAAAAAAAAky1db1jx+NoNPK4XUrEcZ2z5pgAAAAAAAAAAAAAcY2HFqzWeLsBhWjSZid8ToLGfrpiT4xEq4AAAAAAAAAACfI95X3+JQJ8j3lff4kGsAAAAAAAAAAAAAAADN6S7cemPmVRb6T7cen7lUAAAAAAAAAAAT5HvK+/xKBPke8r7/Eg1gAAAAAAAAAAAAAAAZvSfbj0/cqi30n249P3KoAAAAAAAAAAAnyPeV9/iUCfI95X3+JBrAAAAAAAAAAAAAAAAzek+3Hp+5VFvpPtx6fuVQAAAAAAAAAABPke8r7/ABIA1gAAAAAAAAAAAAAAAZvSfbj0/cqgAAAAAAA//9k='
);

--BLOG

-- CREATE TABLE blogs(
-- blog_id SERIAL PRIMARY KEY,
-- blog TEXT,
-- user_id REFERENCES users(user_id),
--  );

-- --EVENTS

-- CREATE TABLE events(
-- event_id SERIAL PRIMARY KEY,
-- event TEXT,
-- user_id REFERENCES user(user_id),    
-- );

-- --BLOG COMMENTS

-- CREATE TABLE blog_comments(
-- commment_id SERIAL PRIMARY KEY,
-- comment TEXT,
-- user_id REFERENCES users(user_id),
-- blog_id REFERENCES blogs(blog_id)  
-- );

-- --EVENT COMMENTS

-- CREATE TABLE event_comments(
-- commment_id SERIAL PRIMARY KEY,
-- comment TEXT,
-- user_id REFERENCES users(user_id),
-- event_id REFERENCES events(event_id)  
-- );