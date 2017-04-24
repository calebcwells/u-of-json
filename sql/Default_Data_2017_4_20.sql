ALTER TABLE [courses] NOCHECK CONSTRAINT ALL
GO
ALTER TABLE [courses] DISABLE TRIGGER ALL
GO

SET IDENTITY_INSERT [courses] ON 
PRINT 'Begin inserting data in courses'
INSERT INTO [courses] ([id], [course])
VALUES(1, 'ECON100')
INSERT INTO [courses] ([id], [course])
VALUES(2, 'HIST100')
INSERT INTO [courses] ([id], [course])
VALUES(3, 'MATH101')
INSERT INTO [courses] ([id], [course])
VALUES(4, 'MATH102')
INSERT INTO [courses] ([id], [course])
VALUES(5, 'MATH103')
SET IDENTITY_INSERT [courses] OFF 
ALTER TABLE [courses] CHECK CONSTRAINT ALL
GO

ALTER TABLE [courses] ENABLE TRIGGER ALL
GO



ALTER TABLE [grades] NOCHECK CONSTRAINT ALL
GO
ALTER TABLE [grades] DISABLE TRIGGER ALL
GO

SET IDENTITY_INSERT [grades] ON 
PRINT 'Begin inserting data in grades'
INSERT INTO [grades] ([id], [grade])
VALUES(1, 'A')
INSERT INTO [grades] ([id], [grade])
VALUES(2, 'B')
INSERT INTO [grades] ([id], [grade])
VALUES(3, 'C')
INSERT INTO [grades] ([id], [grade])
VALUES(4, 'D')
INSERT INTO [grades] ([id], [grade])
VALUES(5, 'F')
INSERT INTO [grades] ([id], [grade])
VALUES(6, 'I')
SET IDENTITY_INSERT [grades] OFF 
ALTER TABLE [grades] CHECK CONSTRAINT ALL
GO

ALTER TABLE [grades] ENABLE TRIGGER ALL
GO



ALTER TABLE [roster] NOCHECK CONSTRAINT ALL
GO
ALTER TABLE [roster] DISABLE TRIGGER ALL
GO

SET IDENTITY_INSERT [roster] ON 
PRINT 'Begin inserting data in roster'
SET IDENTITY_INSERT [roster] OFF 
ALTER TABLE [roster] CHECK CONSTRAINT ALL
GO

ALTER TABLE [roster] ENABLE TRIGGER ALL
GO



ALTER TABLE [students] NOCHECK CONSTRAINT ALL
GO
ALTER TABLE [students] DISABLE TRIGGER ALL
GO

SET IDENTITY_INSERT [students] ON 
PRINT 'Begin inserting data in students'
INSERT INTO [students] ([id], [first], [last], [age], [address], [city], [state], [zip], [email], [gradYear])
VALUES(1, 'Herbert', 'Becker', 35, '271 Evacat Terrace', 'Lodofaj', 'VA', '45204', 'cif@uvecozma.bz', 2020)
INSERT INTO [students] ([id], [first], [last], [age], [address], [city], [state], [zip], [email], [gradYear])
VALUES(2, 'Lizzie', 'James', 48, '1934 Evasi Road', 'Bavcabe', 'KS', '28251', 'sivihele@teche.in', 2020)
INSERT INTO [students] ([id], [first], [last], [age], [address], [city], [state], [zip], [email], [gradYear])
VALUES(3, 'Jeremy', 'Barnett', 45, '711 Cipe Street', 'Ruktureh', 'MN', '19654', 'imi@uwvinec.ls', 2019)
INSERT INTO [students] ([id], [first], [last], [age], [address], [city], [state], [zip], [email], [gradYear])
VALUES(4, 'Maggie', 'Hayes', 46, '1241 Elfu Road', 'Heugouja', 'OR', '94230', 'mup@miza.th', 2019)
INSERT INTO [students] ([id], [first], [last], [age], [address], [city], [state], [zip], [email], [gradYear])
VALUES(5, 'Georgie', 'Barnett', 26, '1448 Jeleva Circle', 'Zekalduc', 'LA', '74210', 'dilo@lekpuze.se', 2020)
INSERT INTO [students] ([id], [first], [last], [age], [address], [city], [state], [zip], [email], [gradYear])
VALUES(6, 'Ora', 'Riley', 64, '301 Lihe Heights', 'Anmacko', 'MO', '25912', 'orucar@kefzegote.ck', 2019)
INSERT INTO [students] ([id], [first], [last], [age], [address], [city], [state], [zip], [email], [gradYear])
VALUES(7, 'Sarah', 'Rivera', 21, '619 Popep Highway', 'Wedofkun', 'TN', '15564', 'fodahsu@joleggi.mz', 2019)
INSERT INTO [students] ([id], [first], [last], [age], [address], [city], [state], [zip], [email], [gradYear])
VALUES(8, 'Victor', 'Parks', 53, '1317 Uchac Ridge', 'Adgenhev', 'IA', '75517', 'hol@ul.aw', 2017)
INSERT INTO [students] ([id], [first], [last], [age], [address], [city], [state], [zip], [email], [gradYear])
VALUES(9, 'Wayne', 'Hansen', 57, '1413 Bigri Place', 'Gihteig', 'AZ', '74658', 'laj@unu.zw', 2020)
INSERT INTO [students] ([id], [first], [last], [age], [address], [city], [state], [zip], [email], [gradYear])
VALUES(10, 'Jason', 'Peterson', 35, '1728 Padiv Lane', 'Zakajug', 'MI', '46286', 'nuhhemi@ja.co.uk', 2017)
SET IDENTITY_INSERT [students] OFF 
ALTER TABLE [students] CHECK CONSTRAINT ALL
GO

ALTER TABLE [students] ENABLE TRIGGER ALL
GO



