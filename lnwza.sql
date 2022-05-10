--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: gender; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.gender AS ENUM (
    'male',
    'female'
);


ALTER TYPE public.gender OWNER TO postgres;

--
-- Name: gender2; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.gender2 AS ENUM (
    'ชาย',
    'หญิง'
);


ALTER TYPE public.gender2 OWNER TO postgres;

--
-- Name: identity_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.identity_type AS ENUM (
    'identity_id',
    'pink',
    'passport'
);


ALTER TYPE public.identity_type OWNER TO postgres;

--
-- Name: national_list; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.national_list AS ENUM (
    'กัมภูชา',
    'เมียนม่า',
    'ไม่ระบุ',
    'ลาว',
    'null'
);


ALTER TYPE public.national_list OWNER TO postgres;

--
-- Name: prefix_name_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.prefix_name_type AS ENUM (
    'นาย',
    'นาง',
    'นางสาว',
    'ด.ช.',
    'ด.ญ.'
);


ALTER TYPE public.prefix_name_type OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: contact; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contact (
    person_id integer,
    line_id character varying(255),
    email character varying(255)
);


ALTER TABLE public.contact OWNER TO postgres;

--
-- Name: person; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.person (
    person_id integer NOT NULL,
    prefix_name public.prefix_name_type,
    firstname character varying(255),
    lastname character varying(255),
    gender_type public.gender2,
    dob date,
    identity_card_type public.identity_type,
    identity_id character varying(255),
    passport character varying(255),
    "national" public.national_list
);


ALTER TABLE public.person OWNER TO postgres;

--
-- Name: person_address; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.person_address (
    person_id integer,
    house_id character varying(255),
    village_no character varying(255),
    village_name character varying(255),
    room character varying(255),
    avenue character varying(255),
    alley character varying(255)
);


ALTER TABLE public.person_address OWNER TO postgres;

--
-- Name: person_person_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.person_person_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.person_person_id_seq OWNER TO postgres;

--
-- Name: person_person_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.person_person_id_seq OWNED BY public.person.person_id;


--
-- Name: vaccine; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vaccine (
    vaccine_id integer NOT NULL,
    vaccine_name character varying(255),
    vaccine_seq integer,
    vaccine_desc character varying(255),
    vaccine_age integer
);


ALTER TABLE public.vaccine OWNER TO postgres;

--
-- Name: vaccine_date; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vaccine_date (
    vaccine_date_id integer NOT NULL,
    vaccine_id integer,
    date date,
    time_start character varying(255),
    time_end character varying(255)
);


ALTER TABLE public.vaccine_date OWNER TO postgres;

--
-- Name: vaccine_date_vaccine_date_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.vaccine_date_vaccine_date_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vaccine_date_vaccine_date_id_seq OWNER TO postgres;

--
-- Name: vaccine_date_vaccine_date_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.vaccine_date_vaccine_date_id_seq OWNED BY public.vaccine_date.vaccine_date_id;


--
-- Name: vaccine_order; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vaccine_order (
    order_id integer NOT NULL,
    user_id integer,
    vaccine_id integer,
    vaccine_date_id integer
);


ALTER TABLE public.vaccine_order OWNER TO postgres;

--
-- Name: vaccine_order_order_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.vaccine_order_order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vaccine_order_order_id_seq OWNER TO postgres;

--
-- Name: vaccine_order_order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.vaccine_order_order_id_seq OWNED BY public.vaccine_order.order_id;


--
-- Name: vaccine_vaccine_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.vaccine_vaccine_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vaccine_vaccine_id_seq OWNER TO postgres;

--
-- Name: vaccine_vaccine_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.vaccine_vaccine_id_seq OWNED BY public.vaccine.vaccine_id;


--
-- Name: person person_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.person ALTER COLUMN person_id SET DEFAULT nextval('public.person_person_id_seq'::regclass);


--
-- Name: vaccine vaccine_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vaccine ALTER COLUMN vaccine_id SET DEFAULT nextval('public.vaccine_vaccine_id_seq'::regclass);


--
-- Name: vaccine_date vaccine_date_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vaccine_date ALTER COLUMN vaccine_date_id SET DEFAULT nextval('public.vaccine_date_vaccine_date_id_seq'::regclass);


--
-- Name: vaccine_order order_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vaccine_order ALTER COLUMN order_id SET DEFAULT nextval('public.vaccine_order_order_id_seq'::regclass);


--
-- Data for Name: contact; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contact (person_id, line_id, email) FROM stdin;
20	test	dfbdfg
\.


--
-- Data for Name: person; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.person (person_id, prefix_name, firstname, lastname, gender_type, dob, identity_card_type, identity_id, passport, "national") FROM stdin;
20	นาย	test	test	ชาย	0001-01-01	pink	12345	123546	ลาว
\.


--
-- Data for Name: person_address; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.person_address (person_id, house_id, village_no, village_name, room, avenue, alley) FROM stdin;
20	123	567	dfgdfg	e00	dfhgfdg	10
\.


--
-- Data for Name: vaccine; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vaccine (vaccine_id, vaccine_name, vaccine_seq, vaccine_desc, vaccine_age) FROM stdin;
6	CVC-ศูนย์ฉีดวัคซีนกลางบางซื่อ	4	ฉีดครบ 3 เข็ม (เข็ม 3 เป็นสูตรใดก็ได้)	2
5	CVC-ศูนย์ฉีดวัคซีนกลางบางซื่อ	3	ฉีดครบ 2 เข็ม (ฉีดเข็ม 1+2 สูตรใดก็ได้)	2
7	CVC-ศูนย์ฉีดวัคซีนกลางบางซื่อ	3	ฉีดครบ 2 เข็ม (ฉีดเข็ม 1+2 สูตรใดก็ได้)	1
8	MBK-เอ็มบีเค เซ็นเตอร์	3	ฉีดสูตรไขว้ Sinovac, Sinopharm, AZ, Pfizer ครบ 2 เข็ม หรือสูตรปกติใน 3 วัคซีนแรก ครบ 2 เข็ม	2
9	MBK-เอ็มบีเค เซ็นเตอร์	4	ฉีดเข็ม 1+2: Sinovac, Sinopharm หรือสูตรไขว้ และเข็ม 3: AZ หรือ Pfizer ครบ 90 วัน	2
\.


--
-- Data for Name: vaccine_date; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vaccine_date (vaccine_date_id, vaccine_id, date, time_start, time_end) FROM stdin;
\.


--
-- Data for Name: vaccine_order; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vaccine_order (order_id, user_id, vaccine_id, vaccine_date_id) FROM stdin;
1	20	2	0
\.


--
-- Name: person_person_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.person_person_id_seq', 20, true);


--
-- Name: vaccine_date_vaccine_date_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vaccine_date_vaccine_date_id_seq', 10, true);


--
-- Name: vaccine_order_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vaccine_order_order_id_seq', 1, true);


--
-- Name: vaccine_vaccine_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vaccine_vaccine_id_seq', 9, true);


--
-- Name: person person_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_pkey PRIMARY KEY (person_id);


--
-- Name: vaccine_date vaccine_date_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vaccine_date
    ADD CONSTRAINT vaccine_date_pkey PRIMARY KEY (vaccine_date_id);


--
-- Name: vaccine_order vaccine_order_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vaccine_order
    ADD CONSTRAINT vaccine_order_pkey PRIMARY KEY (order_id);


--
-- Name: vaccine vaccine_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vaccine
    ADD CONSTRAINT vaccine_pkey PRIMARY KEY (vaccine_id);


--
-- PostgreSQL database dump complete
--

