--
-- PostgreSQL database dump
--

-- Dumped from database version 10.3
-- Dumped by pg_dump version 10.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: sentiment_classification; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sentiment_classification (
    classification_id integer NOT NULL,
    review_classification_id integer,
    classification_description text,
    classification_rating numeric
);


ALTER TABLE public.sentiment_classification OWNER TO postgres;

--
-- Name: sentiment_classification_classification_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sentiment_classification_classification_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sentiment_classification_classification_id_seq OWNER TO postgres;

--
-- Name: sentiment_classification_classification_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sentiment_classification_classification_id_seq OWNED BY public.sentiment_classification.classification_id;


--
-- Name: sentiment_classification classification_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sentiment_classification ALTER COLUMN classification_id SET DEFAULT nextval('public.sentiment_classification_classification_id_seq'::regclass);


--
-- Data for Name: sentiment_classification; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sentiment_classification (classification_id, review_classification_id, classification_description, classification_rating) FROM stdin;
1398	285	Work/Life Balance	5.0
1399	286	Work/Life Balance	5.0
1400	287	Work/Life Balance	4.0
1401	287	Career Opportunities	2.0
1402	287	Compensation and Benefits	4.0
1403	287	Senior Management	2.0
1404	288	Work/Life Balance	4.0
1405	288	Culture & Values	3.0
1406	288	Career Opportunities	1.0
1407	288	Compensation and Benefits	3.0
1408	288	Senior Management	1.0
1409	289	Work/Life Balance	3.0
1410	289	Culture & Values	3.0
1411	289	Career Opportunities	1.0
1412	289	Compensation and Benefits	3.0
1413	289	Senior Management	1.0
1414	290	Work/Life Balance	0.0
1415	290	Culture & Values	0.0
1416	290	Career Opportunities	0.0
1417	290	Compensation and Benefits	0.0
1418	290	Senior Management	0.0
1419	291	Work/Life Balance	2.0
1420	291	Culture & Values	2.0
1421	291	Career Opportunities	2.0
1422	291	Compensation and Benefits	2.0
1423	291	Senior Management	2.0
1424	292	Work/Life Balance	3.0
1425	292	Culture & Values	2.0
1426	292	Career Opportunities	4.0
1427	292	Compensation and Benefits	4.0
1428	292	Senior Management	2.0
1429	293	Work/Life Balance	1.0
1430	293	Culture & Values	1.0
1431	293	Career Opportunities	1.0
1432	293	Compensation and Benefits	1.0
1433	293	Senior Management	1.0
1434	294	Work/Life Balance	1.0
1435	294	Culture & Values	1.0
1436	294	Career Opportunities	1.0
1437	294	Compensation and Benefits	1.0
1438	294	Senior Management	1.0
1439	295	Work/Life Balance	1.0
1440	295	Culture & Values	1.0
1441	295	Career Opportunities	1.0
1442	295	Compensation and Benefits	1.0
1443	295	Senior Management	1.0
1444	296	Work/Life Balance	5.0
1445	296	Culture & Values	5.0
1446	296	Career Opportunities	5.0
1447	296	Compensation and Benefits	5.0
1448	296	Senior Management	5.0
1449	297	Work/Life Balance	1.0
1450	297	Culture & Values	1.0
1451	297	Career Opportunities	1.0
1452	297	Compensation and Benefits	1.0
1453	297	Senior Management	1.0
1454	298	Work/Life Balance	4.0
1455	298	Culture & Values	4.0
1456	298	Career Opportunities	4.0
1457	298	Compensation and Benefits	4.0
1458	298	Senior Management	3.0
1459	299	Work/Life Balance	5.0
1460	299	Culture & Values	5.0
1461	299	Career Opportunities	4.0
1462	299	Compensation and Benefits	4.0
1463	299	Senior Management	5.0
1464	300	Work/Life Balance	1.0
1465	300	Culture & Values	1.0
1466	300	Career Opportunities	1.0
1467	300	Compensation and Benefits	2.0
1468	300	Senior Management	1.0
1469	301	Work/Life Balance	1.0
1470	301	Culture & Values	1.0
1471	301	Career Opportunities	1.0
1472	301	Compensation and Benefits	1.0
1473	301	Senior Management	1.0
1474	302	Work/Life Balance	1.0
1475	302	Culture & Values	1.0
1476	302	Career Opportunities	1.0
1477	302	Compensation and Benefits	2.0
1478	302	Senior Management	1.0
1479	303	Work/Life Balance	5.0
1480	303	Culture & Values	2.0
1481	303	Career Opportunities	4.0
1482	303	Compensation and Benefits	3.0
1483	303	Senior Management	1.0
1484	304	Work/Life Balance	3.0
1485	304	Culture & Values	3.0
1486	304	Career Opportunities	3.0
1487	304	Compensation and Benefits	3.0
1488	304	Senior Management	3.0
1489	305	Work/Life Balance	1.0
1490	305	Culture & Values	4.0
1491	305	Career Opportunities	1.0
1492	305	Compensation and Benefits	3.0
1493	305	Senior Management	1.0
1494	306	Work/Life Balance	0.0
1495	306	Culture & Values	0.0
1496	306	Career Opportunities	0.0
1497	306	Compensation and Benefits	0.0
1498	306	Senior Management	0.0
1499	307	Work/Life Balance	5.0
1500	307	Culture & Values	1.0
1501	307	Career Opportunities	1.0
1502	307	Compensation and Benefits	3.0
1503	307	Senior Management	1.0
1504	308	Work/Life Balance	5.0
1505	308	Culture & Values	5.0
1506	308	Career Opportunities	5.0
1507	308	Compensation and Benefits	5.0
1508	308	Senior Management	5.0
1509	309	Work/Life Balance	1.0
1510	309	Culture & Values	1.0
1511	309	Career Opportunities	1.0
1512	309	Compensation and Benefits	2.0
1513	309	Senior Management	1.0
1514	310	Work/Life Balance	4.0
1515	310	Culture & Values	4.0
1516	310	Career Opportunities	3.0
1517	310	Compensation and Benefits	4.0
1518	310	Senior Management	3.0
1519	311	Work/Life Balance	1.0
1520	311	Culture & Values	1.0
1521	311	Career Opportunities	1.0
1522	311	Compensation and Benefits	1.0
1523	311	Senior Management	1.0
1524	312	Work/Life Balance	3.0
1525	312	Culture & Values	4.0
1526	312	Career Opportunities	1.0
1527	312	Compensation and Benefits	3.0
1528	312	Senior Management	1.0
1529	313	Work/Life Balance	1.0
1530	313	Culture & Values	1.0
1531	313	Career Opportunities	2.0
1532	313	Compensation and Benefits	3.0
1533	313	Senior Management	1.0
1534	314	Work/Life Balance	4.0
1535	314	Culture & Values	2.0
1536	314	Career Opportunities	3.0
1537	314	Compensation and Benefits	4.0
1538	314	Senior Management	3.0
1539	315	Work/Life Balance	3.0
1540	315	Culture & Values	4.0
1541	315	Career Opportunities	3.0
1542	315	Compensation and Benefits	3.0
1543	315	Senior Management	3.0
1544	316	Work/Life Balance	3.0
1545	316	Culture & Values	2.0
1546	316	Career Opportunities	1.0
1547	316	Compensation and Benefits	2.0
1548	316	Senior Management	2.0
1549	317	Work/Life Balance	5.0
1550	317	Culture & Values	1.0
1551	317	Career Opportunities	1.0
1552	317	Compensation and Benefits	4.0
1553	317	Senior Management	1.0
1554	318	Work/Life Balance	1.0
1555	318	Culture & Values	2.0
1556	318	Career Opportunities	2.0
1557	318	Compensation and Benefits	2.0
1558	318	Senior Management	1.0
1559	319	Work/Life Balance	1.0
1560	319	Career Opportunities	1.0
1561	319	Compensation and Benefits	\N
1562	319	Senior Management	\N
1563	319	Culture & Values	\N
1564	320	Work/Life Balance	1.0
1565	320	Culture & Values	1.0
1566	320	Career Opportunities	1.0
1567	320	Compensation and Benefits	1.0
1568	320	Senior Management	1.0
1569	321	Work/Life Balance	1.0
1570	321	Culture & Values	1.0
1571	321	Compensation and Benefits	1.0
1572	321	Senior Management	1.0
1573	321	Career Opportunities	\N
1574	322	Work/Life Balance	1.0
1575	322	Culture & Values	1.0
1576	322	Career Opportunities	2.0
1577	322	Compensation and Benefits	2.0
1578	322	Senior Management	1.0
1579	323	Work/Life Balance	5.0
1580	323	Culture & Values	3.0
1581	323	Career Opportunities	4.0
1582	323	Compensation and Benefits	4.0
1583	323	Senior Management	3.0
1584	324	Work/Life Balance	5.0
1585	324	Culture & Values	5.0
1586	324	Career Opportunities	4.0
1587	324	Compensation and Benefits	5.0
1588	324	Senior Management	4.0
1589	325	Work/Life Balance	2.0
1590	325	Culture & Values	2.0
1591	325	Career Opportunities	5.0
1592	325	Compensation and Benefits	3.0
1593	325	Senior Management	1.0
1594	326	Work/Life Balance	4.0
1595	326	Culture & Values	4.0
1596	326	Career Opportunities	3.0
1597	326	Compensation and Benefits	4.0
1598	326	Senior Management	2.0
1599	327	Work/Life Balance	3.0
1600	327	Culture & Values	3.0
1601	327	Career Opportunities	3.0
1602	327	Compensation and Benefits	3.0
1603	327	Senior Management	3.0
1604	328	Work/Life Balance	4.0
1605	328	Culture & Values	3.0
1606	328	Career Opportunities	2.0
1607	328	Compensation and Benefits	4.0
1608	328	Senior Management	1.0
1609	329	Work/Life Balance	3.0
1610	329	Culture & Values	2.0
1611	329	Career Opportunities	1.0
1612	329	Compensation and Benefits	1.0
1613	329	Senior Management	2.0
1614	330	Work/Life Balance	1.0
1615	330	Culture & Values	3.0
1616	330	Career Opportunities	2.0
1617	330	Compensation and Benefits	3.0
1618	330	Senior Management	3.0
1619	331	Work/Life Balance	2.0
1620	331	Culture & Values	1.0
1621	331	Career Opportunities	2.0
1622	331	Compensation and Benefits	2.0
1623	331	Senior Management	1.0
1624	332	Work/Life Balance	3.0
1625	332	Culture & Values	4.0
1626	332	Career Opportunities	4.0
1627	332	Compensation and Benefits	4.0
1628	332	Senior Management	4.0
1629	333	Work/Life Balance	3.0
1630	333	Culture & Values	1.0
1631	333	Career Opportunities	1.0
1632	333	Compensation and Benefits	4.0
1633	333	Senior Management	1.0
1634	334	Work/Life Balance	1.0
1635	334	Culture & Values	2.0
1636	334	Career Opportunities	1.0
1637	334	Compensation and Benefits	2.0
1638	334	Senior Management	1.0
1639	335	Work/Life Balance	4.0
1640	335	Culture & Values	3.0
1641	335	Career Opportunities	2.0
1642	335	Compensation and Benefits	3.0
1643	335	Senior Management	2.0
1644	336	Work/Life Balance	5.0
1645	336	Culture & Values	5.0
1646	336	Career Opportunities	5.0
1647	336	Compensation and Benefits	5.0
1648	336	Senior Management	5.0
1649	337	Work/Life Balance	4.0
1650	337	Culture & Values	4.0
1651	337	Career Opportunities	4.0
1652	337	Compensation and Benefits	4.0
1653	337	Senior Management	4.0
1654	338	Work/Life Balance	4.0
1655	338	Culture & Values	3.0
1656	338	Compensation and Benefits	3.0
1657	338	Senior Management	2.0
1658	338	Career Opportunities	\N
1659	339	Work/Life Balance	3.0
1660	339	Culture & Values	1.0
1661	339	Career Opportunities	1.0
1662	339	Compensation and Benefits	3.0
1663	339	Senior Management	1.0
1664	340	Work/Life Balance	2.0
1665	340	Culture & Values	2.0
1666	340	Career Opportunities	2.0
1667	340	Compensation and Benefits	1.0
1668	340	Senior Management	1.0
1669	341	Work/Life Balance	3.0
1670	341	Culture & Values	3.0
1671	341	Career Opportunities	2.0
1672	341	Compensation and Benefits	3.0
1673	341	Senior Management	4.0
1674	342	Work/Life Balance	3.0
1675	342	Culture & Values	1.0
1676	342	Career Opportunities	1.0
1677	342	Compensation and Benefits	3.0
1678	342	Senior Management	1.0
1679	343	Work/Life Balance	2.0
1680	343	Culture & Values	2.0
1681	343	Career Opportunities	1.0
1682	343	Compensation and Benefits	2.0
1683	343	Senior Management	1.0
1684	344	Work/Life Balance	1.0
1685	344	Culture & Values	1.0
1686	344	Career Opportunities	1.0
1687	344	Compensation and Benefits	1.0
1688	344	Senior Management	1.0
1689	345	Work/Life Balance	2.0
1690	345	Culture & Values	1.0
1691	345	Career Opportunities	1.0
1692	345	Compensation and Benefits	3.0
1693	345	Senior Management	1.0
1694	346	Work/Life Balance	4.0
1695	346	Culture & Values	3.0
1696	346	Career Opportunities	2.0
1697	346	Compensation and Benefits	4.0
1698	346	Senior Management	3.0
1699	347	Work/Life Balance	1.0
1700	347	Culture & Values	1.0
1701	347	Career Opportunities	1.0
1702	347	Compensation and Benefits	1.0
1703	347	Senior Management	1.0
1704	348	Work/Life Balance	3.0
1705	348	Culture & Values	3.0
1706	348	Career Opportunities	1.0
1707	348	Compensation and Benefits	2.0
1708	348	Senior Management	1.0
1709	349	Work/Life Balance	3.0
1710	349	Culture & Values	2.0
1711	349	Career Opportunities	1.0
1712	349	Compensation and Benefits	3.0
1713	349	Senior Management	2.0
1714	350	Work/Life Balance	4.0
1715	350	Culture & Values	4.0
1716	350	Career Opportunities	1.0
1717	350	Compensation and Benefits	1.0
1718	350	Senior Management	1.0
1719	351	Work/Life Balance	2.0
1720	351	Culture & Values	3.0
1721	351	Career Opportunities	3.0
1722	351	Compensation and Benefits	3.0
1723	351	Senior Management	1.0
1724	352	Work/Life Balance	4.0
1725	352	Culture & Values	4.0
1726	352	Career Opportunities	5.0
1727	352	Compensation and Benefits	3.0
1728	352	Senior Management	5.0
1729	353	Work/Life Balance	4.0
1730	353	Culture & Values	3.0
1731	353	Career Opportunities	1.0
1732	353	Compensation and Benefits	5.0
1733	353	Senior Management	2.0
1734	354	Work/Life Balance	2.0
1735	354	Culture & Values	2.0
1736	354	Career Opportunities	1.0
1737	354	Compensation and Benefits	3.0
1738	354	Senior Management	1.0
1739	355	Work/Life Balance	1.0
1740	355	Culture & Values	2.0
1741	355	Career Opportunities	1.0
1742	355	Compensation and Benefits	3.0
1743	355	Senior Management	1.0
1744	356	Work/Life Balance	1.0
1745	356	Culture & Values	1.0
1746	356	Career Opportunities	3.0
1747	356	Compensation and Benefits	4.0
1748	356	Senior Management	1.0
1749	357	Work/Life Balance	5.0
1750	357	Culture & Values	4.0
1751	357	Career Opportunities	2.0
1752	357	Compensation and Benefits	5.0
1753	357	Senior Management	2.0
1754	358	Work/Life Balance	1.0
1755	358	Culture & Values	3.0
1756	358	Career Opportunities	2.0
1757	358	Compensation and Benefits	4.0
1758	358	Senior Management	1.0
1759	359	Work/Life Balance	5.0
1760	359	Culture & Values	4.0
1761	359	Career Opportunities	3.0
1762	359	Compensation and Benefits	3.0
1763	359	Senior Management	1.0
1764	360	Work/Life Balance	1.0
1765	360	Culture & Values	3.0
1766	360	Career Opportunities	1.0
1767	360	Compensation and Benefits	3.0
1768	360	Senior Management	1.0
1769	361	Work/Life Balance	3.0
1770	361	Culture & Values	4.0
1771	361	Career Opportunities	4.0
1772	361	Compensation and Benefits	5.0
1773	361	Senior Management	3.0
1774	362	Work/Life Balance	1.0
1775	362	Culture & Values	3.0
1776	362	Career Opportunities	1.0
1777	362	Compensation and Benefits	2.0
1778	362	Senior Management	2.0
1779	363	Work/Life Balance	4.0
1780	363	Culture & Values	1.0
1781	363	Career Opportunities	4.0
1782	363	Compensation and Benefits	4.0
1783	363	Senior Management	4.0
1784	364	Work/Life Balance	3.0
1785	364	Culture & Values	3.0
1786	364	Career Opportunities	2.0
1787	364	Compensation and Benefits	3.0
1788	364	Senior Management	3.0
1789	365	Work/Life Balance	1.0
1790	365	Culture & Values	1.0
1791	365	Career Opportunities	2.0
1792	365	Compensation and Benefits	1.0
1793	365	Senior Management	1.0
1794	366	Work/Life Balance	2.0
1795	366	Culture & Values	3.0
1796	366	Career Opportunities	3.0
1797	366	Compensation and Benefits	3.0
1798	366	Senior Management	3.0
1799	367	Work/Life Balance	3.0
1800	367	Culture & Values	1.0
1801	367	Career Opportunities	3.0
1802	367	Compensation and Benefits	3.0
1803	367	Senior Management	1.0
1804	368	Work/Life Balance	3.0
1805	368	Culture & Values	3.0
1806	368	Career Opportunities	3.0
1807	368	Compensation and Benefits	4.0
1808	368	Senior Management	3.0
1809	369	Work/Life Balance	3.0
1810	369	Culture & Values	4.0
1811	369	Career Opportunities	4.0
1812	369	Compensation and Benefits	3.0
1813	369	Senior Management	3.0
1814	370	Work/Life Balance	3.0
1815	370	Culture & Values	5.0
1816	370	Career Opportunities	3.0
1817	370	Compensation and Benefits	3.0
1818	370	Senior Management	3.0
1819	371	Work/Life Balance	5.0
1820	371	Culture & Values	4.0
1821	371	Career Opportunities	4.0
1822	371	Compensation and Benefits	4.0
1824	371	Senior Management	4.0
1825	372	Work/Life Balance	4.0
1826	372	Culture & Values	4.0
1827	372	Career Opportunities	5.0
1828	372	Compensation and Benefits	4.0
1829	372	Senior Management	4.0
1831	373	Work/Life Balance	4.0
1832	373	Culture & Values	1.0
1833	373	Career Opportunities	1.0
1834	373	Compensation and Benefits	1.0
1835	373	Senior Management	2.0
1836	374	Work/Life Balance	4.0
1837	374	Culture & Values	5.0
1838	374	Career Opportunities	5.0
1839	374	Compensation and Benefits	4.0
1840	374	Senior Management	5.0
1842	375	Work/Life Balance	4.0
1843	375	Culture & Values	3.0
1844	375	Career Opportunities	1.0
1845	375	Compensation and Benefits	1.0
1830	286	Culture & Values	4.0
1841	285	Culture & Values	5.0
1823	285	Compensation and Benefits	4.0
1846	375	Senior Management	1.0
1847	376	Work/Life Balance	1.0
1848	376	Culture & Values	3.0
1849	376	Career Opportunities	1.0
1850	376	Compensation and Benefits	1.0
1851	376	Senior Management	1.0
1852	377	Work/Life Balance	5.0
1853	377	Culture & Values	5.0
1854	377	Career Opportunities	5.0
1855	377	Compensation and Benefits	5.0
1856	377	Senior Management	5.0
1857	378	Work/Life Balance	1.0
1858	378	Culture & Values	1.0
1859	378	Career Opportunities	2.0
1860	378	Compensation and Benefits	2.0
1861	378	Senior Management	1.0
1862	379	Work/Life Balance	4.0
1863	286	Compensation and Benefits	4.0
1864	379	Culture & Values	5.0
1865	379	Career Opportunities	3.0
1866	379	Compensation and Benefits	5.0
1867	379	Senior Management	4.0
1868	380	Work/Life Balance	5.0
1869	380	Culture & Values	5.0
1870	380	Career Opportunities	3.0
1871	380	Compensation and Benefits	3.0
1872	380	Senior Management	3.0
1873	381	Work/Life Balance	4.0
1874	381	Culture & Values	5.0
1875	381	Career Opportunities	4.0
1876	381	Compensation and Benefits	4.0
1877	381	Senior Management	5.0
1878	382	Work/Life Balance	5.0
1879	382	Culture & Values	3.0
1880	382	Career Opportunities	1.0
1881	382	Compensation and Benefits	3.0
1882	382	Senior Management	5.0
1883	383	Work/Life Balance	1.0
1884	383	Career Opportunities	1.0
1885	383	Compensation and Benefits	1.0
1886	383	Senior Management	1.0
1887	383	Culture & Values	\N
1888	384	Work/Life Balance	5.0
1889	384	Culture & Values	4.0
1890	384	Career Opportunities	4.0
1891	384	Compensation and Benefits	3.0
1892	384	Senior Management	3.0
1893	385	Work/Life Balance	4.0
1894	385	Culture & Values	3.0
1895	385	Career Opportunities	4.0
1896	385	Compensation and Benefits	4.0
1897	385	Senior Management	4.0
1898	386	Work/Life Balance	5.0
1899	386	Culture & Values	4.0
1900	386	Career Opportunities	5.0
1901	386	Compensation and Benefits	5.0
1902	386	Senior Management	5.0
1903	387	Work/Life Balance	2.0
1904	387	Culture & Values	1.0
1905	387	Career Opportunities	1.0
1906	387	Compensation and Benefits	1.0
1907	387	Senior Management	1.0
1908	388	Work/Life Balance	5.0
1909	388	Culture & Values	5.0
1910	388	Compensation and Benefits	4.0
1911	388	Senior Management	5.0
1912	388	Career Opportunities	\N
1913	389	Work/Life Balance	5.0
1914	389	Culture & Values	5.0
1922	390	Senior Management	3.0
1924	391	Culture & Values	1.0
1932	392	Senior Management	5.0
1934	393	Culture & Values	5.0
1942	394	Senior Management	1.0
1944	395	Culture & Values	4.0
1952	396	Senior Management	4.0
1954	397	Culture & Values	1.0
1963	398	Senior Management	1.0
1965	399	Culture & Values	1.0
1973	400	Senior Management	5.0
1975	401	Culture & Values	1.0
1983	402	Senior Management	3.0
1985	403	Culture & Values	2.0
1993	404	Senior Management	3.0
1995	405	Culture & Values	1.0
2003	406	Senior Management	1.0
2005	407	Culture & Values	5.0
2013	408	Senior Management	3.0
2015	409	Culture & Values	4.0
2022	410	Compensation and Benefits	1.0
2027	411	Career Opportunities	5.0
2034	412	Senior Management	5.0
2037	413	Culture & Values	4.0
2043	414	Compensation and Benefits	4.0
2047	415	Career Opportunities	3.0
1915	389	Career Opportunities	3.0
1921	390	Compensation and Benefits	2.0
1925	391	Career Opportunities	1.0
1931	392	Compensation and Benefits	5.0
1935	393	Career Opportunities	5.0
1941	394	Compensation and Benefits	1.0
1945	395	Career Opportunities	3.0
1951	396	Compensation and Benefits	1.0
1955	397	Career Opportunities	1.0
1962	398	Compensation and Benefits	2.0
1966	399	Career Opportunities	1.0
1972	400	Compensation and Benefits	4.0
1976	401	Career Opportunities	2.0
1982	402	Compensation and Benefits	3.0
1986	403	Career Opportunities	2.0
1992	404	Compensation and Benefits	2.0
1996	405	Career Opportunities	1.0
2002	406	Compensation and Benefits	3.0
2006	407	Career Opportunities	5.0
2012	408	Compensation and Benefits	3.0
2016	409	Career Opportunities	2.0
2023	410	Senior Management	1.0
2026	411	Culture & Values	5.0
1916	389	Compensation and Benefits	5.0
1920	390	Career Opportunities	4.0
1926	391	Compensation and Benefits	1.0
1930	392	Career Opportunities	5.0
1936	393	Compensation and Benefits	5.0
1940	394	Career Opportunities	1.0
1946	395	Compensation and Benefits	1.0
1950	396	Career Opportunities	3.0
1956	397	Compensation and Benefits	1.0
1961	398	Career Opportunities	1.0
1967	399	Compensation and Benefits	1.0
1971	400	Career Opportunities	1.0
1977	401	Compensation and Benefits	2.0
1981	402	Career Opportunities	4.0
1987	403	Compensation and Benefits	1.0
1991	404	Career Opportunities	3.0
1997	405	Compensation and Benefits	2.0
2001	406	Career Opportunities	1.0
2007	407	Compensation and Benefits	5.0
2011	408	Career Opportunities	2.0
2017	409	Compensation and Benefits	3.0
2021	410	Career Opportunities	1.0
2029	411	Compensation and Benefits	4.0
2032	412	Career Opportunities	5.0
2039	413	Senior Management	2.0
2042	414	Career Opportunities	4.0
2048	415	Compensation and Benefits	2.0
1917	389	Senior Management	4.0
1919	390	Culture & Values	4.0
1927	391	Senior Management	1.0
1929	392	Culture & Values	5.0
1937	393	Senior Management	5.0
1939	394	Culture & Values	1.0
1947	395	Senior Management	3.0
1949	396	Culture & Values	5.0
1958	397	Senior Management	1.0
1960	398	Culture & Values	1.0
1968	399	Senior Management	1.0
1970	400	Culture & Values	3.0
1978	401	Senior Management	1.0
1980	402	Culture & Values	5.0
1988	403	Senior Management	2.0
1990	404	Culture & Values	2.0
1998	405	Senior Management	1.0
2000	406	Culture & Values	1.0
2008	407	Senior Management	5.0
2010	408	Culture & Values	3.0
2018	409	Senior Management	1.0
2020	410	Culture & Values	1.0
2028	411	Senior Management	4.0
2033	412	Compensation and Benefits	5.0
2036	413	Career Opportunities	3.0
2044	414	Senior Management	4.0
2046	415	Culture & Values	1.0
1918	390	Work/Life Balance	4.0
1923	391	Work/Life Balance	1.0
1928	392	Work/Life Balance	5.0
1933	393	Work/Life Balance	5.0
1938	394	Work/Life Balance	1.0
1943	395	Work/Life Balance	3.0
1948	396	Work/Life Balance	1.0
1953	397	Work/Life Balance	1.0
1959	398	Work/Life Balance	1.0
1964	399	Work/Life Balance	4.0
1969	400	Work/Life Balance	4.0
1974	401	Work/Life Balance	1.0
1979	402	Work/Life Balance	3.0
1957	285	Career Opportunities	4.0
1984	403	Work/Life Balance	4.0
1989	404	Work/Life Balance	1.0
1994	405	Work/Life Balance	4.0
1999	406	Work/Life Balance	2.0
2004	407	Work/Life Balance	5.0
2009	408	Work/Life Balance	3.0
2014	409	Work/Life Balance	4.0
2019	410	Work/Life Balance	1.0
2025	411	Work/Life Balance	5.0
2024	286	Career Opportunities	5.0
2030	412	Work/Life Balance	5.0
2031	412	Culture & Values	5.0
2035	413	Work/Life Balance	3.0
2038	413	Compensation and Benefits	3.0
2040	414	Work/Life Balance	5.0
2041	414	Culture & Values	5.0
2045	415	Work/Life Balance	5.0
2049	415	Senior Management	2.0
2050	285	Senior Management	5.0
2051	287	Culture & Values	4.0
2052	286	Senior Management	4.0
2053	416	Work/Life Balance	1.0
2054	417	Work/Life Balance	5.0
2055	418	Work/Life Balance	1.0
2056	418	Career Opportunities	1.0
2057	418	Compensation and Benefits	1.0
2058	418	Senior Management	1.0
2059	419	Work/Life Balance	4.0
2060	419	Culture & Values	2.0
2061	419	Career Opportunities	1.0
2062	419	Compensation and Benefits	4.0
2063	419	Senior Management	1.0
2064	420	Work/Life Balance	4.0
2065	420	Culture & Values	2.0
2066	420	Career Opportunities	1.0
2067	420	Compensation and Benefits	1.0
2068	420	Senior Management	1.0
2069	421	Work/Life Balance	2.0
2070	421	Culture & Values	3.0
2071	421	Career Opportunities	3.0
2072	421	Compensation and Benefits	2.0
2073	421	Senior Management	2.0
2074	422	Work/Life Balance	5.0
2075	422	Culture & Values	5.0
2076	422	Career Opportunities	5.0
2077	422	Compensation and Benefits	5.0
2078	422	Senior Management	5.0
2079	423	Work/Life Balance	1.0
2080	423	Culture & Values	1.0
2081	423	Career Opportunities	1.0
2082	423	Compensation and Benefits	1.0
2083	423	Senior Management	1.0
2084	424	Work/Life Balance	1.0
2085	424	Culture & Values	1.0
2086	424	Career Opportunities	1.0
2087	424	Compensation and Benefits	3.0
2088	424	Senior Management	1.0
2089	425	Work/Life Balance	1.0
2090	425	Culture & Values	2.0
2091	425	Career Opportunities	1.0
2092	425	Compensation and Benefits	1.0
2093	425	Senior Management	3.0
2094	426	Work/Life Balance	1.0
2095	426	Culture & Values	1.0
2096	426	Career Opportunities	1.0
2097	426	Compensation and Benefits	1.0
2098	426	Senior Management	2.0
2099	427	Work/Life Balance	1.0
2100	427	Culture & Values	1.0
2101	427	Career Opportunities	4.0
2102	427	Compensation and Benefits	2.0
2103	427	Senior Management	1.0
2104	428	Work/Life Balance	4.0
2105	428	Culture & Values	3.0
2106	428	Career Opportunities	2.0
2107	428	Compensation and Benefits	2.0
2108	428	Senior Management	3.0
2109	429	Work/Life Balance	3.0
2110	429	Culture & Values	5.0
2111	429	Career Opportunities	2.0
2112	429	Compensation and Benefits	2.0
2113	429	Senior Management	5.0
2114	430	Work/Life Balance	4.0
2115	430	Culture & Values	4.0
2116	430	Career Opportunities	2.0
2117	430	Compensation and Benefits	2.0
2118	430	Senior Management	3.0
2119	431	Work/Life Balance	2.0
2120	431	Culture & Values	1.0
2121	431	Career Opportunities	1.0
2122	431	Compensation and Benefits	1.0
2123	431	Senior Management	3.0
2124	432	Work/Life Balance	3.0
2125	432	Culture & Values	3.0
2126	432	Career Opportunities	2.0
2127	432	Compensation and Benefits	2.0
2128	432	Senior Management	4.0
2129	433	Work/Life Balance	4.0
2130	433	Culture & Values	4.0
2131	433	Career Opportunities	4.0
2132	433	Compensation and Benefits	3.0
2133	433	Senior Management	4.0
2134	434	Work/Life Balance	2.0
2135	434	Culture & Values	1.0
2136	434	Career Opportunities	2.0
2137	434	Compensation and Benefits	1.0
2138	434	Senior Management	2.0
2139	435	Work/Life Balance	1.0
2140	435	Culture & Values	1.0
2141	435	Career Opportunities	1.0
2142	435	Compensation and Benefits	1.0
2143	435	Senior Management	1.0
2144	436	Work/Life Balance	5.0
2145	436	Culture & Values	3.0
2146	436	Career Opportunities	3.0
2147	436	Compensation and Benefits	3.0
2148	436	Senior Management	3.0
2149	437	Work/Life Balance	1.0
2150	437	Culture & Values	3.0
2151	437	Compensation and Benefits	1.0
2152	437	Senior Management	1.0
2153	437	Career Opportunities	\N
2154	438	Work/Life Balance	4.0
2155	438	Culture & Values	2.0
2156	438	Career Opportunities	2.0
2157	438	Compensation and Benefits	3.0
2158	438	Senior Management	3.0
2159	439	Work/Life Balance	1.0
2160	439	Culture & Values	4.0
2161	439	Career Opportunities	3.0
2162	439	Compensation and Benefits	2.0
2163	439	Senior Management	2.0
2164	440	Work/Life Balance	5.0
2165	440	Culture & Values	5.0
2166	440	Career Opportunities	4.0
2167	440	Compensation and Benefits	4.0
2168	440	Senior Management	5.0
2169	441	Work/Life Balance	2.0
2170	441	Culture & Values	1.0
2171	441	Career Opportunities	1.0
2172	441	Compensation and Benefits	2.0
2173	441	Senior Management	1.0
2174	442	Work/Life Balance	4.0
2175	442	Culture & Values	1.0
2176	442	Career Opportunities	2.0
2177	442	Compensation and Benefits	1.0
2178	442	Senior Management	1.0
2179	443	Work/Life Balance	5.0
2180	443	Culture & Values	4.0
2181	443	Career Opportunities	2.0
2182	443	Compensation and Benefits	3.0
2183	443	Senior Management	5.0
2184	444	Work/Life Balance	4.0
2185	444	Culture & Values	3.0
2186	444	Career Opportunities	2.0
2187	444	Compensation and Benefits	2.0
2188	444	Senior Management	2.0
2189	445	Work/Life Balance	1.0
2190	445	Culture & Values	1.0
2191	445	Career Opportunities	1.0
2192	445	Compensation and Benefits	1.0
2193	445	Senior Management	1.0
2194	446	Work/Life Balance	2.0
2195	446	Culture & Values	1.0
2196	446	Career Opportunities	3.0
2197	446	Compensation and Benefits	2.0
2198	446	Senior Management	3.0
2199	447	Work/Life Balance	1.0
2200	447	Culture & Values	1.0
2201	447	Career Opportunities	1.0
2202	447	Compensation and Benefits	1.0
2203	447	Senior Management	3.0
2204	448	Work/Life Balance	2.0
2205	448	Culture & Values	2.0
2206	448	Career Opportunities	1.0
2207	448	Compensation and Benefits	3.0
2208	448	Senior Management	2.0
2209	449	Work/Life Balance	1.0
2210	449	Culture & Values	3.0
2211	449	Career Opportunities	1.0
2212	449	Compensation and Benefits	1.0
2213	449	Senior Management	2.0
2214	450	Work/Life Balance	1.0
2215	450	Culture & Values	1.0
2216	450	Career Opportunities	1.0
2217	450	Compensation and Benefits	5.0
2218	450	Senior Management	1.0
2219	451	Work/Life Balance	2.0
2220	451	Culture & Values	1.0
2221	451	Career Opportunities	2.0
2222	451	Compensation and Benefits	3.0
2223	451	Senior Management	1.0
2224	452	Work/Life Balance	3.0
2225	452	Culture & Values	2.0
2226	452	Career Opportunities	1.0
2227	452	Compensation and Benefits	2.0
2228	452	Senior Management	2.0
2229	453	Work/Life Balance	2.0
2230	453	Culture & Values	2.0
2231	453	Career Opportunities	5.0
2232	453	Compensation and Benefits	1.0
2233	453	Senior Management	2.0
2234	454	Work/Life Balance	2.0
2235	454	Culture & Values	1.0
2236	454	Career Opportunities	1.0
2237	454	Compensation and Benefits	2.0
2238	454	Senior Management	1.0
2239	455	Work/Life Balance	3.0
2240	455	Culture & Values	4.0
2241	455	Career Opportunities	5.0
2242	455	Compensation and Benefits	4.0
2243	455	Senior Management	4.0
2244	456	Work/Life Balance	2.0
2245	456	Culture & Values	4.0
2246	456	Career Opportunities	4.0
2247	456	Compensation and Benefits	3.0
2248	456	Senior Management	2.0
2249	457	Work/Life Balance	1.0
2250	457	Culture & Values	1.0
2251	457	Career Opportunities	1.0
2252	457	Compensation and Benefits	1.0
2253	457	Senior Management	1.0
2254	458	Work/Life Balance	5.0
2255	458	Culture & Values	3.0
2256	458	Career Opportunities	3.0
2257	458	Compensation and Benefits	3.0
2258	458	Senior Management	3.0
2259	459	Work/Life Balance	1.0
2260	459	Culture & Values	1.0
2261	459	Career Opportunities	1.0
2262	459	Compensation and Benefits	1.0
2263	459	Senior Management	1.0
2264	460	Work/Life Balance	4.0
2265	460	Culture & Values	3.0
2266	460	Career Opportunities	2.0
2267	460	Compensation and Benefits	3.0
2268	460	Senior Management	3.0
2269	461	Work/Life Balance	2.0
2270	461	Culture & Values	2.0
2271	461	Career Opportunities	1.0
2272	461	Compensation and Benefits	2.0
2273	461	Senior Management	2.0
2274	462	Work/Life Balance	3.0
2275	462	Culture & Values	5.0
2276	462	Career Opportunities	4.0
2277	462	Compensation and Benefits	3.0
2278	462	Senior Management	4.0
2279	463	Work/Life Balance	4.0
2280	463	Culture & Values	1.0
2281	463	Career Opportunities	2.0
2282	463	Compensation and Benefits	2.0
2283	463	Senior Management	3.0
2284	464	Work/Life Balance	5.0
2285	464	Culture & Values	5.0
2286	464	Career Opportunities	5.0
2287	464	Compensation and Benefits	5.0
2288	464	Senior Management	5.0
2289	465	Work/Life Balance	4.0
2290	465	Culture & Values	4.0
2291	465	Career Opportunities	3.0
2292	465	Compensation and Benefits	2.0
2293	465	Senior Management	4.0
2294	466	Work/Life Balance	5.0
2295	466	Culture & Values	3.0
2296	466	Career Opportunities	3.0
2297	466	Compensation and Benefits	4.0
2298	466	Senior Management	3.0
2299	467	Work/Life Balance	1.0
2300	467	Culture & Values	1.0
2301	467	Career Opportunities	1.0
2302	467	Compensation and Benefits	1.0
2303	467	Senior Management	1.0
2304	468	Work/Life Balance	3.0
2305	468	Culture & Values	5.0
2306	468	Career Opportunities	5.0
2307	468	Compensation and Benefits	5.0
2308	468	Senior Management	4.0
2309	469	Work/Life Balance	4.0
2310	469	Culture & Values	1.0
2311	469	Career Opportunities	2.0
2312	469	Compensation and Benefits	3.0
2313	469	Senior Management	1.0
2314	470	Work/Life Balance	4.0
2315	470	Culture & Values	4.0
2316	470	Career Opportunities	2.0
2317	470	Compensation and Benefits	3.0
2318	470	Senior Management	3.0
2319	471	Work/Life Balance	5.0
2320	471	Culture & Values	5.0
2321	471	Career Opportunities	1.0
2322	471	Compensation and Benefits	1.0
2323	471	Senior Management	5.0
2324	472	Work/Life Balance	2.0
2325	472	Culture & Values	2.0
2326	472	Career Opportunities	2.0
2327	472	Compensation and Benefits	4.0
2328	472	Senior Management	1.0
2329	416	Compensation and Benefits	4.0
2330	417	Culture & Values	4.0
2331	416	Career Opportunities	1.0
2332	416	Culture & Values	1.0
2333	416	Senior Management	1.0
2334	417	Compensation and Benefits	2.0
2335	417	Career Opportunities	3.0
2336	417	Senior Management	4.0
2337	418	Culture & Values	1.0
2338	473	Work/Life Balance	4.0
2339	474	Work/Life Balance	3.0
2340	475	Work/Life Balance	4.0
2341	475	Career Opportunities	1.0
2342	475	Compensation and Benefits	1.0
2343	475	Senior Management	2.0
2344	476	Work/Life Balance	2.0
2345	476	Culture & Values	4.0
2346	476	Career Opportunities	3.0
2347	476	Compensation and Benefits	4.0
2348	476	Senior Management	3.0
2349	477	Work/Life Balance	4.0
2350	477	Culture & Values	3.0
2351	477	Career Opportunities	4.0
2352	477	Compensation and Benefits	2.0
2353	477	Senior Management	3.0
2354	478	Work/Life Balance	1.0
2355	478	Culture & Values	1.0
2356	478	Career Opportunities	1.0
2357	478	Compensation and Benefits	1.0
2358	478	Senior Management	1.0
2359	479	Work/Life Balance	4.0
2360	479	Culture & Values	4.0
2361	479	Career Opportunities	3.0
2362	479	Compensation and Benefits	4.0
2363	479	Senior Management	2.0
2364	480	Work/Life Balance	1.0
2365	480	Culture & Values	2.0
2366	480	Career Opportunities	1.0
2367	480	Compensation and Benefits	3.0
2368	480	Senior Management	1.0
2369	481	Work/Life Balance	3.0
2370	481	Culture & Values	1.0
2371	481	Career Opportunities	4.0
2372	481	Compensation and Benefits	2.0
2373	481	Senior Management	3.0
2374	482	Work/Life Balance	1.0
2375	482	Culture & Values	1.0
2376	482	Career Opportunities	1.0
2377	482	Compensation and Benefits	1.0
2378	482	Senior Management	1.0
2379	483	Work/Life Balance	3.0
2380	483	Culture & Values	4.0
2381	483	Career Opportunities	2.0
2382	483	Compensation and Benefits	3.0
2383	483	Senior Management	4.0
2384	484	Work/Life Balance	1.0
2385	484	Culture & Values	1.0
2386	484	Career Opportunities	1.0
2387	484	Compensation and Benefits	2.0
2388	484	Senior Management	2.0
2389	485	Work/Life Balance	1.0
2390	485	Culture & Values	1.0
2391	485	Career Opportunities	1.0
2392	485	Compensation and Benefits	1.0
2393	485	Senior Management	1.0
2394	486	Work/Life Balance	3.0
2395	486	Culture & Values	2.0
2396	486	Career Opportunities	2.0
2397	486	Compensation and Benefits	3.0
2398	486	Senior Management	2.0
2399	487	Work/Life Balance	5.0
2400	487	Culture & Values	4.0
2401	487	Career Opportunities	3.0
2402	487	Compensation and Benefits	3.0
2403	487	Senior Management	5.0
2404	488	Work/Life Balance	1.0
2405	488	Culture & Values	1.0
2406	488	Career Opportunities	1.0
2407	488	Compensation and Benefits	1.0
2408	488	Senior Management	1.0
2409	489	Work/Life Balance	1.0
2410	489	Culture & Values	1.0
2411	489	Career Opportunities	1.0
2412	489	Compensation and Benefits	1.0
2413	489	Senior Management	1.0
2414	490	Work/Life Balance	\N
2415	490	Career Opportunities	\N
2416	490	Compensation and Benefits	\N
2417	490	Senior Management	\N
2418	490	Culture & Values	\N
2419	491	Work/Life Balance	3.0
2420	491	Culture & Values	2.0
2421	491	Career Opportunities	2.0
2422	491	Compensation and Benefits	3.0
2423	491	Senior Management	2.0
2424	492	Work/Life Balance	4.0
2425	492	Culture & Values	4.0
2426	492	Career Opportunities	3.0
2427	492	Compensation and Benefits	4.0
2428	492	Senior Management	4.0
2429	493	Work/Life Balance	4.0
2430	493	Culture & Values	2.0
2431	493	Career Opportunities	1.0
2432	493	Compensation and Benefits	1.0
2433	493	Senior Management	1.0
2434	494	Work/Life Balance	3.0
2435	494	Culture & Values	2.0
2436	494	Career Opportunities	1.0
2437	494	Compensation and Benefits	2.0
2438	494	Senior Management	3.0
2439	495	Work/Life Balance	\N
2440	495	Career Opportunities	\N
2441	495	Compensation and Benefits	\N
2442	495	Senior Management	\N
2443	495	Culture & Values	\N
2444	496	Work/Life Balance	1.0
2445	496	Culture & Values	1.0
2446	496	Career Opportunities	1.0
2447	496	Compensation and Benefits	1.0
2448	496	Senior Management	1.0
2449	497	Work/Life Balance	1.0
2450	497	Culture & Values	1.0
2451	497	Career Opportunities	1.0
2452	497	Compensation and Benefits	1.0
2453	497	Senior Management	\N
2454	498	Work/Life Balance	1.0
2455	498	Culture & Values	1.0
2456	498	Career Opportunities	1.0
2457	498	Compensation and Benefits	2.0
2458	498	Senior Management	1.0
2459	499	Work/Life Balance	5.0
2460	499	Culture & Values	5.0
2461	499	Career Opportunities	5.0
2462	499	Compensation and Benefits	5.0
2463	499	Senior Management	5.0
2464	500	Work/Life Balance	3.0
2465	500	Culture & Values	3.0
2466	500	Career Opportunities	1.0
2467	500	Compensation and Benefits	2.0
2468	500	Senior Management	1.0
2469	501	Work/Life Balance	2.0
2470	501	Culture & Values	2.0
2471	501	Career Opportunities	3.0
2472	501	Compensation and Benefits	2.0
2473	501	Senior Management	2.0
2474	502	Work/Life Balance	1.0
2475	502	Culture & Values	1.0
2476	502	Career Opportunities	1.0
2477	502	Compensation and Benefits	1.0
2478	502	Senior Management	1.0
2479	503	Work/Life Balance	5.0
2480	503	Culture & Values	4.0
2481	503	Career Opportunities	4.0
2482	503	Senior Management	5.0
2483	503	Compensation and Benefits	\N
2484	504	Work/Life Balance	3.0
2485	504	Culture & Values	1.0
2486	504	Career Opportunities	1.0
2487	504	Compensation and Benefits	1.0
2488	504	Senior Management	1.0
2489	505	Work/Life Balance	3.0
2490	505	Culture & Values	1.0
2491	505	Career Opportunities	1.0
2492	505	Compensation and Benefits	1.0
2493	505	Senior Management	1.0
2494	506	Work/Life Balance	1.0
2495	506	Culture & Values	1.0
2496	506	Career Opportunities	1.0
2497	506	Compensation and Benefits	1.0
2498	506	Senior Management	1.0
2499	507	Work/Life Balance	3.0
2500	507	Culture & Values	3.0
2501	507	Career Opportunities	1.0
2502	507	Compensation and Benefits	2.0
2503	507	Senior Management	3.0
2504	508	Work/Life Balance	4.0
2505	508	Culture & Values	3.0
2506	508	Career Opportunities	3.0
2507	508	Compensation and Benefits	3.0
2508	508	Senior Management	4.0
2509	509	Work/Life Balance	2.0
2510	509	Culture & Values	3.0
2511	509	Career Opportunities	2.0
2512	509	Compensation and Benefits	4.0
2513	509	Senior Management	3.0
2514	510	Work/Life Balance	1.0
2515	510	Culture & Values	1.0
2516	510	Career Opportunities	1.0
2517	510	Compensation and Benefits	1.0
2518	510	Senior Management	1.0
2519	511	Work/Life Balance	3.0
2520	511	Culture & Values	3.0
2521	511	Career Opportunities	2.0
2522	511	Compensation and Benefits	1.0
2523	511	Senior Management	3.0
2524	512	Work/Life Balance	4.0
2525	512	Culture & Values	4.0
2526	512	Career Opportunities	3.0
2527	512	Compensation and Benefits	4.0
2528	512	Senior Management	4.0
2529	513	Work/Life Balance	\N
2530	513	Career Opportunities	\N
2531	513	Compensation and Benefits	\N
2532	513	Senior Management	\N
2533	513	Culture & Values	\N
2534	514	Work/Life Balance	2.0
2535	514	Culture & Values	1.0
2536	514	Career Opportunities	1.0
2537	514	Compensation and Benefits	2.0
2538	514	Senior Management	2.0
2539	515	Work/Life Balance	4.0
2540	515	Culture & Values	4.0
2541	515	Career Opportunities	3.0
2542	515	Compensation and Benefits	4.0
2543	515	Senior Management	4.0
2544	516	Work/Life Balance	4.0
2545	516	Culture & Values	2.0
2546	516	Career Opportunities	2.0
2547	516	Compensation and Benefits	2.0
2548	516	Senior Management	1.0
2549	517	Work/Life Balance	2.0
2550	517	Culture & Values	2.0
2551	517	Career Opportunities	1.0
2552	517	Compensation and Benefits	1.0
2553	517	Senior Management	1.0
2554	518	Work/Life Balance	4.0
2555	518	Culture & Values	4.0
2556	518	Career Opportunities	3.0
2557	518	Compensation and Benefits	3.0
2558	518	Senior Management	3.0
2559	519	Work/Life Balance	1.0
2560	519	Culture & Values	1.0
2561	519	Career Opportunities	1.0
2562	519	Compensation and Benefits	1.0
2563	519	Senior Management	1.0
2564	520	Work/Life Balance	1.0
2565	520	Culture & Values	1.0
2566	520	Career Opportunities	1.0
2567	520	Compensation and Benefits	1.0
2568	520	Senior Management	1.0
2569	521	Work/Life Balance	5.0
2570	521	Culture & Values	1.0
2571	521	Career Opportunities	1.0
2572	521	Compensation and Benefits	2.0
2573	521	Senior Management	1.0
2574	522	Work/Life Balance	5.0
2575	522	Culture & Values	1.0
2576	522	Career Opportunities	2.0
2577	522	Compensation and Benefits	2.0
2578	522	Senior Management	2.0
2579	523	Work/Life Balance	2.0
2580	523	Culture & Values	2.0
2581	523	Career Opportunities	3.0
2582	523	Compensation and Benefits	2.0
2583	523	Senior Management	2.0
2584	524	Work/Life Balance	4.0
2585	524	Culture & Values	1.0
2586	524	Career Opportunities	1.0
2587	524	Compensation and Benefits	1.0
2588	524	Senior Management	1.0
2589	525	Work/Life Balance	2.0
2590	525	Culture & Values	3.0
2591	525	Career Opportunities	1.0
2592	525	Compensation and Benefits	1.0
2593	525	Senior Management	4.0
2594	526	Work/Life Balance	2.0
2595	526	Culture & Values	2.0
2596	526	Career Opportunities	2.0
2597	526	Compensation and Benefits	2.0
2598	526	Senior Management	1.0
2599	527	Work/Life Balance	2.0
2600	527	Culture & Values	3.0
2601	527	Career Opportunities	2.0
2602	527	Compensation and Benefits	4.0
2603	527	Senior Management	3.0
2604	528	Work/Life Balance	1.0
2605	528	Culture & Values	1.0
2606	528	Career Opportunities	1.0
2607	528	Compensation and Benefits	1.0
2608	528	Senior Management	1.0
2609	529	Work/Life Balance	1.0
2610	529	Culture & Values	1.0
2611	529	Career Opportunities	1.0
2612	529	Compensation and Benefits	1.0
2613	529	Senior Management	1.0
2614	530	Work/Life Balance	3.0
2615	530	Culture & Values	2.0
2616	530	Career Opportunities	1.0
2617	530	Compensation and Benefits	2.0
2618	530	Senior Management	1.0
2619	531	Work/Life Balance	1.0
2620	531	Culture & Values	1.0
2621	531	Career Opportunities	1.0
2622	531	Compensation and Benefits	1.0
2623	531	Senior Management	1.0
2624	532	Work/Life Balance	1.0
2625	532	Culture & Values	4.0
2626	532	Career Opportunities	3.0
2627	532	Compensation and Benefits	5.0
2628	532	Senior Management	2.0
2629	533	Work/Life Balance	\N
2630	533	Career Opportunities	\N
2631	533	Compensation and Benefits	\N
2632	533	Senior Management	\N
2633	533	Culture & Values	\N
2634	473	Career Opportunities	4.0
2635	473	Compensation and Benefits	1.0
2636	473	Culture & Values	4.0
2637	473	Senior Management	4.0
2638	474	Senior Management	3.0
2639	474	Culture & Values	3.0
2640	474	Career Opportunities	1.0
2641	475	Culture & Values	2.0
2642	474	Compensation and Benefits	3.0
2643	534	Work/Life Balance	2.0
2644	535	Work/Life Balance	1.0
2645	536	Work/Life Balance	1.0
2646	536	Career Opportunities	1.0
2647	536	Compensation and Benefits	1.0
2648	536	Senior Management	1.0
2649	537	Work/Life Balance	4.0
2650	537	Culture & Values	3.0
2651	537	Career Opportunities	2.0
2652	537	Compensation and Benefits	3.0
2653	537	Senior Management	3.0
2654	538	Work/Life Balance	4.0
2655	538	Culture & Values	4.0
2656	538	Career Opportunities	2.0
2657	538	Compensation and Benefits	3.0
2658	538	Senior Management	1.0
2659	539	Work/Life Balance	2.0
2660	539	Culture & Values	3.0
2661	539	Career Opportunities	2.0
2662	539	Compensation and Benefits	2.0
2663	539	Senior Management	3.0
2664	540	Work/Life Balance	5.0
2665	540	Culture & Values	4.0
2666	540	Career Opportunities	3.0
2667	540	Compensation and Benefits	2.0
2668	540	Senior Management	3.0
2669	541	Work/Life Balance	2.0
2670	541	Culture & Values	2.0
2671	541	Career Opportunities	2.0
2672	541	Compensation and Benefits	1.0
2673	541	Senior Management	2.0
2674	542	Work/Life Balance	3.0
2675	542	Culture & Values	3.0
2676	542	Career Opportunities	3.0
2677	542	Compensation and Benefits	2.0
2678	542	Senior Management	2.0
2679	543	Work/Life Balance	2.0
2680	543	Culture & Values	3.0
2681	543	Career Opportunities	1.0
2682	543	Compensation and Benefits	2.0
2683	543	Senior Management	3.0
2684	544	Work/Life Balance	\N
2685	544	Career Opportunities	\N
2686	544	Compensation and Benefits	\N
2687	544	Senior Management	\N
2688	544	Culture & Values	\N
2689	545	Work/Life Balance	1.0
2690	545	Culture & Values	2.0
2691	545	Career Opportunities	1.0
2692	545	Compensation and Benefits	2.0
2693	545	Senior Management	2.0
2694	546	Work/Life Balance	1.0
2695	546	Culture & Values	1.0
2696	546	Career Opportunities	2.0
2697	546	Compensation and Benefits	1.0
2698	546	Senior Management	1.0
2699	547	Work/Life Balance	1.0
2700	547	Culture & Values	2.0
2701	547	Career Opportunities	3.0
2702	547	Compensation and Benefits	3.0
2703	547	Senior Management	2.0
2704	548	Work/Life Balance	3.0
2705	548	Culture & Values	1.0
2706	548	Career Opportunities	1.0
2707	548	Compensation and Benefits	2.0
2708	548	Senior Management	1.0
2709	549	Work/Life Balance	\N
2710	549	Career Opportunities	\N
2711	549	Compensation and Benefits	\N
2712	549	Senior Management	\N
2713	549	Culture & Values	\N
2714	550	Work/Life Balance	4.0
2715	550	Culture & Values	1.0
2716	550	Career Opportunities	1.0
2717	550	Compensation and Benefits	1.0
2718	550	Senior Management	1.0
2719	551	Work/Life Balance	5.0
2720	551	Culture & Values	3.0
2721	551	Career Opportunities	1.0
2722	551	Compensation and Benefits	1.0
2723	551	Senior Management	3.0
2724	552	Work/Life Balance	1.0
2725	552	Culture & Values	4.0
2726	552	Career Opportunities	5.0
2727	552	Compensation and Benefits	4.0
2728	552	Senior Management	2.0
2729	553	Work/Life Balance	4.0
2730	553	Culture & Values	3.0
2731	553	Career Opportunities	4.0
2732	553	Compensation and Benefits	3.0
2733	553	Senior Management	4.0
2734	554	Work/Life Balance	1.0
2735	554	Culture & Values	1.0
2736	554	Career Opportunities	1.0
2737	554	Compensation and Benefits	1.0
2738	554	Senior Management	1.0
2739	555	Work/Life Balance	3.0
2740	555	Culture & Values	4.0
2741	555	Career Opportunities	2.0
2742	555	Compensation and Benefits	3.0
2743	555	Senior Management	3.0
2744	556	Work/Life Balance	1.0
2745	556	Culture & Values	1.0
2746	556	Career Opportunities	2.0
2747	556	Compensation and Benefits	2.0
2748	556	Senior Management	1.0
2749	557	Work/Life Balance	2.0
2750	557	Culture & Values	3.0
2751	557	Career Opportunities	3.0
2752	557	Compensation and Benefits	5.0
2753	557	Senior Management	3.0
2754	558	Work/Life Balance	1.0
2755	558	Culture & Values	2.0
2756	558	Career Opportunities	3.0
2757	558	Compensation and Benefits	3.0
2758	558	Senior Management	1.0
2759	559	Work/Life Balance	3.0
2760	559	Culture & Values	4.0
2761	559	Career Opportunities	3.0
2762	559	Compensation and Benefits	1.0
2763	559	Senior Management	1.0
2764	560	Work/Life Balance	4.0
2765	560	Culture & Values	1.0
2766	560	Career Opportunities	1.0
2767	560	Compensation and Benefits	3.0
2768	560	Senior Management	1.0
2769	561	Work/Life Balance	1.0
2770	561	Culture & Values	3.0
2771	561	Career Opportunities	2.0
2772	561	Compensation and Benefits	1.0
2773	561	Senior Management	2.0
2774	562	Work/Life Balance	1.0
2775	562	Culture & Values	1.0
2776	562	Career Opportunities	1.0
2777	562	Compensation and Benefits	1.0
2778	562	Senior Management	2.0
2779	563	Work/Life Balance	3.0
2780	563	Culture & Values	1.0
2781	563	Career Opportunities	2.0
2782	563	Compensation and Benefits	1.0
2783	563	Senior Management	1.0
2784	564	Work/Life Balance	3.0
2785	564	Culture & Values	5.0
2786	564	Career Opportunities	5.0
2787	564	Compensation and Benefits	5.0
2788	564	Senior Management	3.0
2789	565	Work/Life Balance	2.0
2790	565	Culture & Values	1.0
2791	565	Career Opportunities	1.0
2792	565	Compensation and Benefits	1.0
2793	565	Senior Management	1.0
2794	566	Work/Life Balance	\N
2795	566	Career Opportunities	\N
2796	566	Compensation and Benefits	\N
2797	566	Senior Management	\N
2798	566	Culture & Values	\N
2799	567	Work/Life Balance	3.0
2800	567	Culture & Values	3.0
2801	567	Career Opportunities	2.0
2802	567	Compensation and Benefits	2.0
2803	567	Senior Management	3.0
2804	568	Work/Life Balance	1.0
2805	568	Culture & Values	2.0
2806	568	Career Opportunities	3.0
2807	568	Compensation and Benefits	1.0
2808	568	Senior Management	2.0
2809	569	Work/Life Balance	5.0
2810	569	Culture & Values	5.0
2811	569	Career Opportunities	5.0
2812	569	Compensation and Benefits	5.0
2813	569	Senior Management	5.0
2814	570	Work/Life Balance	4.0
2815	570	Culture & Values	2.0
2816	570	Career Opportunities	3.0
2817	570	Compensation and Benefits	3.0
2818	570	Senior Management	2.0
2819	571	Work/Life Balance	2.0
2820	571	Career Opportunities	2.0
2821	571	Senior Management	1.0
2822	571	Compensation and Benefits	\N
2823	571	Culture & Values	\N
2824	572	Work/Life Balance	1.0
2825	572	Culture & Values	1.0
2826	572	Career Opportunities	1.0
2827	572	Compensation and Benefits	2.0
2828	572	Senior Management	1.0
2829	573	Work/Life Balance	1.0
2830	573	Culture & Values	1.0
2831	573	Career Opportunities	1.0
2832	573	Compensation and Benefits	1.0
2833	573	Senior Management	1.0
2834	574	Work/Life Balance	1.0
2835	574	Culture & Values	1.0
2836	574	Career Opportunities	1.0
2837	574	Compensation and Benefits	1.0
2838	574	Senior Management	1.0
2839	575	Work/Life Balance	3.0
2840	575	Culture & Values	5.0
2841	575	Career Opportunities	4.0
2842	575	Compensation and Benefits	5.0
2843	575	Senior Management	3.0
2844	576	Work/Life Balance	1.0
2845	576	Culture & Values	2.0
2846	576	Career Opportunities	1.0
2847	576	Compensation and Benefits	1.0
2848	576	Senior Management	3.0
2849	577	Work/Life Balance	3.0
2850	577	Culture & Values	1.0
2851	577	Career Opportunities	1.0
2852	577	Compensation and Benefits	1.0
2853	577	Senior Management	1.0
2854	578	Work/Life Balance	1.0
2855	578	Culture & Values	1.0
2856	578	Career Opportunities	2.0
2857	578	Compensation and Benefits	1.0
2858	578	Senior Management	1.0
2859	579	Work/Life Balance	4.0
2860	579	Culture & Values	5.0
2861	579	Career Opportunities	4.0
2862	579	Compensation and Benefits	3.0
2863	579	Senior Management	3.0
2864	580	Work/Life Balance	2.0
2865	580	Culture & Values	3.0
2866	580	Career Opportunities	3.0
2867	580	Compensation and Benefits	3.0
2868	580	Senior Management	4.0
2869	581	Work/Life Balance	2.0
2870	581	Culture & Values	1.0
2871	581	Career Opportunities	1.0
2872	581	Compensation and Benefits	1.0
2873	581	Senior Management	1.0
2874	582	Work/Life Balance	1.0
2875	582	Culture & Values	1.0
2876	582	Career Opportunities	1.0
2877	582	Compensation and Benefits	1.0
2878	582	Senior Management	1.0
2879	583	Work/Life Balance	5.0
2880	583	Culture & Values	4.0
2881	583	Career Opportunities	1.0
2882	583	Compensation and Benefits	1.0
2883	583	Senior Management	3.0
2884	584	Work/Life Balance	4.0
2885	584	Culture & Values	3.0
2886	584	Career Opportunities	3.0
2887	584	Compensation and Benefits	3.0
2888	584	Senior Management	3.0
2889	585	Work/Life Balance	1.0
2890	585	Culture & Values	1.0
2891	585	Career Opportunities	3.0
2892	585	Compensation and Benefits	4.0
2893	585	Senior Management	1.0
2894	586	Work/Life Balance	2.0
2895	586	Culture & Values	3.0
2896	586	Career Opportunities	3.0
2897	586	Compensation and Benefits	4.0
2898	586	Senior Management	4.0
2899	587	Work/Life Balance	3.0
2900	587	Culture & Values	4.0
2901	587	Career Opportunities	2.0
2902	587	Compensation and Benefits	1.0
2903	587	Senior Management	3.0
2904	588	Work/Life Balance	4.0
2905	588	Culture & Values	2.0
2906	588	Career Opportunities	1.0
2907	588	Compensation and Benefits	1.0
2908	588	Senior Management	1.0
2909	589	Work/Life Balance	3.0
2910	589	Culture & Values	3.0
2911	589	Career Opportunities	3.0
2912	589	Compensation and Benefits	3.0
2913	589	Senior Management	3.0
2914	590	Work/Life Balance	3.0
2915	590	Culture & Values	2.0
2916	590	Career Opportunities	3.0
2917	590	Compensation and Benefits	3.0
2918	590	Senior Management	2.0
2919	591	Work/Life Balance	3.0
2920	591	Culture & Values	4.0
2921	591	Career Opportunities	4.0
2922	591	Compensation and Benefits	3.0
2923	591	Senior Management	4.0
2924	592	Work/Life Balance	4.0
2925	592	Culture & Values	4.0
2926	592	Career Opportunities	5.0
2927	592	Compensation and Benefits	4.0
2928	592	Senior Management	4.0
2929	593	Work/Life Balance	2.0
2930	593	Culture & Values	2.0
2931	593	Career Opportunities	3.0
2932	593	Compensation and Benefits	3.0
2933	593	Senior Management	2.0
2934	594	Work/Life Balance	2.0
2935	594	Culture & Values	3.0
2936	594	Career Opportunities	3.0
2937	594	Compensation and Benefits	3.0
2938	594	Senior Management	3.0
2939	595	Work/Life Balance	5.0
2940	595	Culture & Values	1.0
2941	595	Career Opportunities	1.0
2942	595	Compensation and Benefits	1.0
2943	595	Senior Management	1.0
2944	596	Work/Life Balance	3.5
2945	596	Career Opportunities	2.5
2946	596	Compensation and Benefits	4.0
2947	596	Senior Management	1.0
2948	596	Culture & Values	\N
2949	597	Work/Life Balance	2.5
2950	597	Career Opportunities	1.0
2951	597	Compensation and Benefits	1.0
2952	597	Senior Management	1.0
2953	597	Culture & Values	\N
2954	598	Work/Life Balance	2.0
2955	598	Career Opportunities	1.5
2956	598	Compensation and Benefits	2.0
2957	598	Senior Management	1.0
2958	598	Culture & Values	\N
2959	599	Work/Life Balance	3.0
2960	599	Career Opportunities	3.5
2961	599	Compensation and Benefits	4.0
2962	599	Senior Management	4.0
2963	599	Culture & Values	\N
2964	600	Work/Life Balance	4.0
2965	600	Career Opportunities	2.0
2966	600	Compensation and Benefits	4.0
2967	600	Senior Management	4.0
2968	600	Culture & Values	\N
2969	601	Work/Life Balance	4.0
2970	601	Career Opportunities	1.5
2971	601	Compensation and Benefits	2.0
2972	601	Senior Management	1.0
2973	601	Culture & Values	\N
2974	602	Work/Life Balance	4.0
2975	602	Career Opportunities	1.0
2976	602	Compensation and Benefits	1.0
2977	602	Senior Management	1.0
2978	602	Culture & Values	\N
2979	603	Work/Life Balance	1.0
2980	603	Career Opportunities	1.0
2981	603	Compensation and Benefits	1.5
2982	603	Senior Management	2.0
2983	603	Culture & Values	\N
2984	604	Work/Life Balance	4.0
2985	604	Career Opportunities	1.0
2986	604	Compensation and Benefits	2.5
2987	604	Senior Management	1.0
2988	604	Culture & Values	\N
2989	605	Work/Life Balance	4.0
2990	605	Career Opportunities	3.0
2991	605	Compensation and Benefits	2.5
2992	605	Senior Management	2.0
2993	605	Culture & Values	\N
2994	606	Work/Life Balance	4.5
2995	606	Career Opportunities	3.0
2996	606	Compensation and Benefits	4.0
2997	606	Senior Management	1.0
2998	606	Culture & Values	\N
2999	607	Work/Life Balance	2.0
3000	607	Career Opportunities	2.0
3002	607	Compensation and Benefits	3.5
3003	607	Senior Management	3.0
3004	607	Culture & Values	\N
3005	608	Work/Life Balance	4.0
3006	608	Career Opportunities	1.0
3007	608	Compensation and Benefits	4.0
3008	608	Senior Management	2.0
3009	608	Culture & Values	\N
3010	609	Work/Life Balance	3.0
3011	609	Career Opportunities	3.0
3012	609	Compensation and Benefits	2.5
3013	609	Senior Management	3.0
3014	609	Culture & Values	\N
3015	610	Work/Life Balance	2.0
3016	610	Culture & Values	3.0
3017	610	Career Opportunities	2.0
3018	610	Compensation and Benefits	3.0
3019	610	Senior Management	2.0
3020	611	Work/Life Balance	5.0
3021	611	Culture & Values	3.0
3022	611	Career Opportunities	3.0
3023	611	Compensation and Benefits	3.0
3024	611	Senior Management	4.0
3025	612	Work/Life Balance	3.0
3026	612	Culture & Values	2.0
3027	612	Career Opportunities	3.0
3028	612	Compensation and Benefits	4.0
3001	534	Culture & Values	2.0
3029	612	Senior Management	1.0
3040	534	Compensation and Benefits	2.0
3041	535	Culture & Values	3.0
3042	534	Career Opportunities	1.0
3043	535	Compensation and Benefits	2.0
3044	534	Senior Management	1.0
3045	535	Senior Management	2.0
3046	535	Career Opportunities	3.0
3047	536	Culture & Values	1.0
\.


--
-- Name: sentiment_classification_classification_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sentiment_classification_classification_id_seq', 3702, true);


--
-- Name: sentiment_classification sentiment_classification_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sentiment_classification
    ADD CONSTRAINT sentiment_classification_pkey PRIMARY KEY (classification_id);


--
-- Name: sentiment_classification foreign_ket_sentiment; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sentiment_classification
    ADD CONSTRAINT foreign_ket_sentiment FOREIGN KEY (review_classification_id) REFERENCES public.sentiment(review_id);


--
-- PostgreSQL database dump complete
--

