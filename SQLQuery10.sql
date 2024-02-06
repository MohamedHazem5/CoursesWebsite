/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [Id]
      ,[Title]
      ,[Description]
      ,[InitializDate]
      ,[Cost]
      ,[ImageURL]
      ,[ImageId]
      ,[Duration]
      ,[SkillLevel]
      ,[Language]
      ,[CategoryId]
      ,[UserId]
  FROM [Routela_Db].[dbo].[Courses]
UPDATE [Routela_Db].[dbo].[Courses]
SET userid = 37
WHERE Id = 19;