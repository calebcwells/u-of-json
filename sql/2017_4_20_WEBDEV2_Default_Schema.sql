/****** Object:  Table [dbo].[students]    Script Date: 04/20/2017 16:00:47 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[students]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[students](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[first] [nvarchar](150) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[last] [nvarchar](150) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[age] [int] NULL,
	[address] [nvarchar](150) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[city] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[state] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[zip] [nvarchar](10) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[email] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
	[gradYear] [int] NOT NULL,
 CONSTRAINT [PK_students] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
/****** Object:  Table [dbo].[roster]    Script Date: 04/20/2017 16:00:48 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[roster]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[roster](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[studentId] [int] NOT NULL,
	[courseId] [int] NULL,
	[gradeId] [int] NULL,
 CONSTRAINT [PK_rooster] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
/****** Object:  Table [dbo].[grades]    Script Date: 04/20/2017 16:00:48 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[grades]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[grades](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[grade] [varchar](1) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
 CONSTRAINT [PK_grades] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
/****** Object:  Table [dbo].[courses]    Script Date: 04/20/2017 16:00:48 ******/
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[courses]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[courses](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[course] [nvarchar](50) COLLATE SQL_Latin1_General_CP1_CI_AS NULL,
 CONSTRAINT [PK_courses] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END


