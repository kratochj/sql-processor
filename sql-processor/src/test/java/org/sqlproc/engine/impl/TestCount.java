package org.sqlproc.engine.impl;

import java.util.List;

import org.junit.Test;
import org.sqlproc.engine.SqlQueryEngine;
import org.sqlproc.engine.model.Library;

public class TestCount extends TestDatabase {

    protected String getDataSetFile(String dbType) {
        return "dbunit/BasicTest.xml";
    }

    @Test
    public void testCount() {
        SqlQueryEngine sqlEngine = getSqlEngine("BASIC_2");

        int rows = sqlEngine.queryCount(session);
        assertTrue(rows > 0);
        logger.info("Rows: " + rows);
    }

    @Test
    public void testAdvancedCount() {
        SqlQueryEngine sqlEngine = getSqlEngine("BASIC_2_LEFT_JOIN");

        List<Library> list = sqlEngine.query(session, Library.class);
        int rows = sqlEngine.queryCount(session);
        assertTrue(list.size() == rows);
        logger.info("Rows: " + rows);
    }

}