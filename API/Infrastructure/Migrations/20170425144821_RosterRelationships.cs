using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace UofJson.API.Infrastructure.Migrations
{
    public partial class RosterRelationships : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "GradeId",
                table: "Rosters",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "CourseId",
                table: "Rosters",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.CreateIndex(
                name: "IX_Rosters_CourseId",
                table: "Rosters",
                column: "CourseId");

            migrationBuilder.CreateIndex(
                name: "IX_Rosters_GradeId",
                table: "Rosters",
                column: "GradeId");

            migrationBuilder.CreateIndex(
                name: "IX_Rosters_StudentId",
                table: "Rosters",
                column: "StudentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Rosters_Courses_CourseId",
                table: "Rosters",
                column: "CourseId",
                principalTable: "Courses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Rosters_Grades_GradeId",
                table: "Rosters",
                column: "GradeId",
                principalTable: "Grades",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Rosters_Students_StudentId",
                table: "Rosters",
                column: "StudentId",
                principalTable: "Students",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rosters_Courses_CourseId",
                table: "Rosters");

            migrationBuilder.DropForeignKey(
                name: "FK_Rosters_Grades_GradeId",
                table: "Rosters");

            migrationBuilder.DropForeignKey(
                name: "FK_Rosters_Students_StudentId",
                table: "Rosters");

            migrationBuilder.DropIndex(
                name: "IX_Rosters_CourseId",
                table: "Rosters");

            migrationBuilder.DropIndex(
                name: "IX_Rosters_GradeId",
                table: "Rosters");

            migrationBuilder.DropIndex(
                name: "IX_Rosters_StudentId",
                table: "Rosters");

            migrationBuilder.AlterColumn<int>(
                name: "GradeId",
                table: "Rosters",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CourseId",
                table: "Rosters",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }
    }
}
