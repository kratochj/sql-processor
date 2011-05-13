package org.sqlproc.engine;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.sqlproc.engine.impl.BeanUtils;
import org.sqlproc.engine.impl.SqlMappingResult;
import org.sqlproc.engine.impl.SqlMappingRule;
import org.sqlproc.engine.impl.SqlMetaStatement;
import org.sqlproc.engine.impl.SqlProcessResult;
import org.sqlproc.engine.type.SqlTypeFactory;

/**
 * The primary SQL Processor class for the META SQL stored procedures execution.
 * 
 * <p>
 * Instance of this class holds one META SQL statement for the stored procedure invocation and one optional Mapping
 * rule.
 * <p>
 * For example there's a stored function, which subtracts one hour from the time passed on to this function as a
 * parameter.
 * 
 * For HSQLDB it can be
 * 
 * <pre>
 * CREATE FUNCTION an_hour_before(t TIMESTAMP)
 *   RETURNS TIMESTAMP
 *   RETURN t - 1 HOUR
 * </pre>
 * 
 * HSQLDB function returns the result set with one column with generated name. To invoke this function the next META SQL
 * statement and mapping rule should be used
 * 
 * <pre>
 * CALL_SIMPLE_FUNCION= \
 *   call an_hour_before(:time)
 * OUT_SIMPLE_FUNCION=1$stamp
 * </pre>
 * 
 * You can see that the name of META SQL statement should start with the prefix <code>CALL_</code>. There's used an
 * output mapping with one mapping item. The database column name is <code>1</code>, so this name is used as an index to
 * retrieve the output value from the result set. At the same time the META type <code>stamp</code> is used, as there's
 * no result class with the output attribute, which can hold the type of the output value.
 * 
 * <p>
 * For ORACLE it can be
 * 
 * <pre>
 * CREATE OR REPLACE FUNCTION an_hour_before (t IN DATE)
 * RETURN DATE
 * AS 
 * BEGIN
 *    RETURN t - INTERVAL '1' HOUR;
 * END an_hour_before;
 * </pre>
 * 
 * <p>
 * and for MySQL it can be
 * 
 * <pre>
 * CREATE FUNCTION an_hour_before(t TIMESTAMP) RETURNS TIMESTAMP
 * BEGIN
 *       RETURN SUBTIME(t, '1:00:00.000000');
 * END
 * </pre>
 * 
 * To invoke them the next META SQL statement without any mapping rule should be used, as there's no output result set
 * 
 * <pre>
 * CALL_SIMPLE_FUNCION= \
 *   :<1^stamp = call an_hour_before(:time)
 * </pre>
 * 
 * You can see there's a special input value <code>:<1^stamp</code> with the name <code>1</code>, which is used as an
 * index to register OUT parameter to the CallableStatement. The special character <code><</code> denotes that this
 * input parameter is in fact of type OUT.
 * 
 * <p>
 * In the case of the SQL Processor initialization
 * 
 * <pre>
 * SqlEngineFactory sqlFactory = new JdbcEngineFactory();
 * SqlProcedureEngine sqlEngine = sqlFactory.getProcedureEngine(&quot;SIMPLE_FUNCION&quot;);
 * Connection connection = DriverManager.getConnection(&quot;jdbc:hsqldb:mem:sqlproc&quot;, &quot;sa&quot;, &quot;&quot;);
 * SqlSession session = new JdbcSimpleSession(connection);
 * </pre>
 * 
 * there's created an instance of SqlProcessorEngine with the name <code>SIMPLE_FUNCION</code>.
 * 
 * <p>
 * Let's have an input form
 * 
 * <pre>
 * public class FormSimpleFunction {
 *     private java.sql.Timestamp time;
 *     private java.sql.Timestamp time2;
 *     // getters and setters
 * }
 * </pre>
 * 
 * Next the simple stored function can be executed in the following way
 * 
 * <pre>
 * FormSimpleFunction f = new FormSimpleFunction();
 * f.setTime(new java.sql.Timestamp(new Date().getTime()));
 * java.sql.Timestamp result = (java.sql.Timestamp) sqlEngine.callFunction(session, f);
 * </pre>
 * 
 * <p>
 * The result from the stored function execution can be also settled back into a search form. Let's have a META SQl
 * statement
 * 
 * <pre>
 * CALL_SIMPLE_FUNCION= \
 *   :&lt;time2 = call an_hour_before(:time)
 * </pre>
 * 
 * and run the function in the following way
 * 
 * <pre>
 * FormSimpleFunction f = new FormSimpleFunction();
 * f.setTime(new java.sql.Timestamp(new Date().getTime()));
 * sqlEngine.callFunction(session, f);
 * </pre>
 * 
 * The result will be stored in the attribute <code>time2</code> in the search form <code>FormSimpleFunction</code>.
 * 
 * <p>
 * For more info please see the <a href="https://github.com/hudec/sql-processor/wiki">Tutorials</a>.
 * 
 * @author <a href="mailto:Vladimir.Hudec@gmail.com">Vladimir Hudec</a>
 */
public class SqlProcedureEngine extends SqlEngine {

    /**
     * Creates a new instance of the SqlProcedureEngine from one stored procedure execution META SQL statement and one
     * SQL mapping rule string. Constructor will call the internal ANTLR parsers for the statement and the mapping rule
     * instances construction. This constructor is devoted to manual META SQL statement and mapping rules construction.
     * More obvious is to put these definitions into queries.properties file and engage the SqlEngineLoader for the
     * SqlProcedureEngine instances construction.
     * 
     * @param name
     *            the name of this SQL Engine instance
     * @param statement
     *            the stored procedure execution META SQL statement
     * @param mapping
     *            the SQL mapping rule
     * @param typeFactory
     *            the factory for the META types construction
     * @throws SqlEngineException
     *             in the case the provided statements are not compliant with the ANTLR grammar
     */
    public SqlProcedureEngine(String name, String statement, String mapping, SqlTypeFactory typeFactory)
            throws SqlEngineException {

        super(name, SqlMetaStatement.getInstance(statement, typeFactory), (mapping != null) ? SqlMappingRule
                .getInstance(mapping, typeFactory) : null, null, null, typeFactory);
    }

    /**
     * Creates a new instance of the SqlProcedureEngine from one stored procedure execution META SQL statement string
     * and one SQL Mapping rule string. Constructor will call the internal ANTLR parsers for the statement and the
     * mapping rule instances construction. Compared to the previous constructor, an external SQL Monitor for the
     * runtime statistics gathering is engaged and the optional features can be involved. This constructor is devoted to
     * manual META SQL statement and mapping rules construction. More obvious is to put these definitions into
     * queries.properties file and engage the SqlEngineLoader for instances construction.
     * 
     * @param name
     *            the name of this SQL Engine instance
     * @param statement
     *            the stored procedure execution META SQL statement
     * @param mapping
     *            the SQL mapping rule
     * @param monitor
     *            the SQL Monitor for the runtime statistics gathering
     * @param features
     *            the optional SQL Processor features
     * @param typeFactory
     *            the factory for the META types construction
     * @throws SqlEngineException
     *             mainly in the case the provided statements are not compliant with the ANTLR grammar
     */
    public SqlProcedureEngine(String name, String statement, String mapping, SqlMonitor monitor,
            Map<String, Object> features, SqlTypeFactory typeFactory) throws SqlEngineException {

        super(name, SqlMetaStatement.getInstance(statement, typeFactory), (mapping != null) ? SqlMappingRule
                .getInstance(mapping, typeFactory) : null, monitor, features, typeFactory);
    }

    /**
     * Creates a new instance of the SqlProcedureEngine from one stored procedure execution META SQL statement and one
     * SQL mapping rule instances. Both parameters are already pre-compiled instances using the ANTLR parsers. This is
     * the recommended usage for the runtime performance optimization. This constructor is devoted to be used from the
     * SqlEngineLoader, which is able to read all statements and mapping rules definitions from an external
     * queries.properties and create the named SqlProcedureEngine instances.
     * 
     * @param name
     *            the name of this SQL Engine instance
     * @param statement
     *            the pre-compiled stored procedure execution META SQL statement
     * @param mapping
     *            the pre-compiled SQL mapping rule
     * @param typeFactory
     *            the factory for the META types construction
     */
    public SqlProcedureEngine(String name, SqlMetaStatement statement, SqlMappingRule mapping,
            SqlTypeFactory typeFactory) {

        super(name, statement, mapping, null, null, typeFactory);
    }

    /**
     * Creates a new instance of the SqlProcedureEngine from one stored procedure execution META SQL statement and one
     * SQL mapping rule instances. Both parameters are already pre-compiled instances using the ANTLR parsers. This is
     * the recommended usage for the runtime performance optimization. This constructor is devoted to be used from the
     * SqlEngineLoader, which is able to read all statements and mapping rules definitions from an external
     * queries.properties and create the named instances. Compared to the previous constructor, an external SQL Monitor
     * for the runtime statistics gathering is engaged and the optional features can be involved.
     * 
     * @param name
     *            the name of this SQL Engine instance
     * @param statement
     *            the pre-compiled stored procedure execution META SQL statement
     * @param mapping
     *            the pre-compiled SQL mapping rule
     * @param monitor
     *            the SQL Monitor for the runtime statistics gathering
     * @param features
     *            the optional SQL Processor features
     * @param typeFactory
     *            the factory for the META types construction
     */
    public SqlProcedureEngine(String name, SqlMetaStatement statement, SqlMappingRule mapping, SqlMonitor monitor,
            Map<String, Object> features, SqlTypeFactory typeFactory) {
        super(name, statement, mapping, monitor, features, typeFactory);
    }

    /**
     * Runs the stored procedure based on the META SQL statement to obtain a list of database rows. This is one of the
     * overriden methods. For the parameters description please see the most complex execution method
     * {@link #callQuery(SqlSession, Class, Object, Object, int)}.
     */
    public <E> List<E> callQuery(final SqlSession session, final Class<E> resultClass, final Object dynamicInputValues)
            throws SqlProcessorException, SqlRuntimeException {
        return callQuery(session, resultClass, dynamicInputValues, null, 0);
    }

    /**
     * Runs the stored procedure based on the META SQL statement to obtain a list of database rows. This is the primary
     * and the most complex SQL Processor execution method to obtain a list of result class instances. The parameters
     * for the stored procedure execution are taken from the input values.
     * 
     * @param session
     *            The SQL Engine session. It can work as a first level cache and the SQL query execution context. The
     *            implementation depends on the stack, on top of which the SQL Processor works. For example it can be an
     *            Hibernate session.
     * @param resultClass
     *            The class used for the return values, the stored procedure execution output. This class is also named
     *            as the output class or the transport class, In fact it's a standard POJO class, which must include all
     *            the attributes described in the mapping rule statement. This class itself and all its subclasses must
     *            have public constructors without any parameters. All the attributes used in the mapping rule statement
     *            must be accessible using public getters and setters. The instances of this class are created on the
     *            fly in the process of the stored procedure execution using the reflection API.
     * @param dynamicInputValues
     *            The object used for the stored procedure dynamic input values. The class of this object is also named
     *            as the input class or the dynamic parameters class. The exact class type isn't important, all the
     *            parameters settled into the SQL callable statement are picked up using the reflection API. At the same
     *            time this object can collect the output values from all OUT and INOUT stored procedure parameters.
     * @param staticInputValues
     *            The object used for the stored procedure static input values. The class of this object is also named
     *            as the input class or the static parameters class. The exact class type isn't important, all the
     *            parameters injected into the callable statement are picked up using the reflection API. Compared to
     *            dynamicInputValues input parameters, parameters in this class should't be produced by an end user to
     *            prevent SQL injection threat!
     * @param maxTimeout
     *            The max SQL execution time. This parameter can help to protect production system against ineffective
     *            SQL statements. The value is in milliseconds.
     * @return The list of the resultClass instances.
     * @throws org.hibernate.SqlProcessorException
     *             in the case of any problem with ORM or JDBC stack
     * @throws org.sqlproc.engine.SqlRuntimeException
     *             in the case of any problem with the input/output values handling
     */
    @SuppressWarnings("unchecked")
    public <E> List<E> callQuery(final SqlSession session, final Class<E> resultClass, final Object dynamicInputValues,
            final Object staticInputValues, final int maxTimeout) throws SqlProcessorException, SqlRuntimeException {
        if (logger.isDebugEnabled()) {
            logger.debug(">> callQuery, session=" + session + ", resultClass=" + resultClass + ", dynamicInputValues="
                    + dynamicInputValues + ", staticInputValues=" + staticInputValues + ", maxTimeout=" + maxTimeout);
        }

        List<E> result = null;

        try {
            result = monitor.runList(new SqlMonitor.Runner() {
                public List<E> run() {
                    SqlProcessResult processResult = statement.process(SqlMetaStatement.Type.CALL, dynamicInputValues,
                            staticInputValues, null, features, typeFactory);
                    SqlQuery query = session.createSqlQuery(processResult.getSql().toString());
                    if (maxTimeout > 0)
                        query.setTimeout(maxTimeout);
                    processResult.setQueryParams(session, query);
                    SqlMappingResult mappingResult = SqlMappingRule.merge(mapping, processResult);
                    mappingResult.setQueryResultMapping(resultClass, null, query);

                    List list = query.callList();
                    List<E> result = new ArrayList<E>();
                    E resultInstance = null;
                    Object[] resultValue = null;
                    Map<String, Object> instances = new HashMap<String, Object>();

                    for (Iterator i$ = list.iterator(); i$.hasNext();) {
                        Object resultRow = i$.next();
                        resultValue = (resultRow instanceof Object[]) ? (Object[]) resultRow
                                : (new Object[] { resultRow });
                        resultInstance = BeanUtils.getInstance(resultClass);
                        if (resultInstance == null) {
                            throw new SqlRuntimeException("There's problem to instantiate " + resultClass);
                        }
                        mappingResult.setQueryResultData(resultInstance, resultValue, instances, null, null);
                        result.add(resultInstance);
                    }
                    return result;
                }
            }, resultClass);
            return result;
        } finally {
            if (logger.isDebugEnabled()) {
                logger.debug("<< callQuery, result=" + result);
            }
        }
    }

    /**
     * Runs the stored procedure based on the META SQL statement. This is one of the overriden methods. For the
     * parameters description please see the most complex execution method
     * {@link #callUpdate(SqlSession, Object, Object, int)}.
     */
    public int callUpdate(final SqlSession session, final Object dynamicInputValues) throws SqlProcessorException,
            SqlRuntimeException {
        return callUpdate(session, dynamicInputValues, null, 0);
    }

    /**
     * Runs the stored procedure based on the META SQL statement. This is the primary and the most complex SQL Processor
     * execution method devoted to CRUD commands execution from inside the stored procedure.
     * 
     * @param session
     *            The SQL Engine session. It can work as a first level cache and the SQL query execution context. The
     *            implementation depends on the stack, on top of which the SQL Processor works. For example it can be an
     *            Hibernate session.
     * @param dynamicInputValues
     *            The object used for the stored procedure dynamic input values. The class of this object is also named
     *            as the input class or the dynamic parameters class. The exact class type isn't important, all the
     *            parameters settled into the SQL callable statement are picked up using the reflection API. At the same
     *            time this object can collect the output values from all OUT and INOUT stored procedure parameters.
     * @param staticInputValues
     *            The object used for the stored procedure static input values. The class of this object is also named
     *            as the input class or the static parameters class. The exact class type isn't important, all the
     *            parameters injected into the callable statement are picked up using the reflection API. Compared to
     *            dynamicInputValues input parameters, parameters in this class should't be produced by an end user to
     *            prevent SQL injection threat!
     * @param maxTimeout
     *            The max SQL execution time. This parameter can help to protect production system against ineffective
     *            SQL statements. The value is in milliseconds.
     * @return The number of persisted, updated, deleted or otherwise affected database rows. It's value strongly
     *         depends on the type of database.
     * @throws org.hibernate.SqlProcessorException
     *             in the case of any problem with ORM or JDBC stack
     * @throws org.sqlproc.engine.SqlRuntimeException
     *             in the case of any problem with the input/output values handling
     */
    @SuppressWarnings("unchecked")
    public int callUpdate(final SqlSession session, final Object dynamicInputValues, final Object staticInputValues,
            final int maxTimeout) throws SqlProcessorException, SqlRuntimeException {
        if (logger.isDebugEnabled()) {
            logger.debug(">> callUpdate, session=" + session + ", dynamicInputValues=" + dynamicInputValues
                    + ", staticInputValues=" + staticInputValues + ", maxTimeout=" + maxTimeout);
        }

        Integer count = null;

        try {
            count = monitor.run(new SqlMonitor.Runner() {
                public Integer run() {
                    SqlProcessResult processResult = statement.process(SqlMetaStatement.Type.CALL, dynamicInputValues,
                            staticInputValues, null, features, typeFactory);
                    SqlQuery query = session.createSqlQuery(processResult.getSql().toString());
                    if (maxTimeout > 0)
                        query.setTimeout(maxTimeout);
                    processResult.setQueryParams(session, query);

                    Integer count = query.callUpdate();
                    processResult.postProcess();
                    return count;
                }
            }, Integer.class);
            return count;
        } finally {
            if (logger.isDebugEnabled()) {
                logger.debug("<< callUpdate, result=" + count);
            }
        }
    }

    /**
     * Runs the stored function based on the META SQL statement. This is one of the overriden methods. For the
     * parameters description please see the most complex execution method
     * {@link #callFunction(SqlSession, Object, Object, int)}.
     */
    public Object callFunction(final SqlSession session, final Object dynamicInputValues) throws SqlProcessorException,
            SqlRuntimeException {
        return callFunction(session, dynamicInputValues, null, 0);
    }

    /**
     * Runs the stored function based on the META SQL statement. This is the primary and the most complex SQL Processor
     * execution method devoted to obtain the value from the stored function execution.
     * 
     * @param session
     *            The SQL Engine session. It can work as a first level cache and the SQL query execution context. The
     *            implementation depends on the stack, on top of which the SQL Processor works. For example it can be an
     *            Hibernate session.
     * @param dynamicInputValues
     *            The object used for the stored procedure dynamic input values. The class of this object is also named
     *            as the input class or the dynamic parameters class. The exact class type isn't important, all the
     *            parameters settled into the SQL callable statement are picked up using the reflection API. At the same
     *            time this object can collect the output values from all OUT and INOUT stored procedure parameters.
     * @param staticInputValues
     *            The object used for the stored procedure static input values. The class of this object is also named
     *            as the input class or the static parameters class. The exact class type isn't important, all the
     *            parameters injected into the callable statement are picked up using the reflection API. Compared to
     *            dynamicInputValues input parameters, parameters in this class should't be produced by an end user to
     *            prevent SQL injection threat!
     * @param maxTimeout
     *            The max SQL execution time. This parameter can help to protect production system against ineffective
     *            SQL statements. The value is in milliseconds.
     * @return The result from the stored function execution.
     * @throws org.hibernate.SqlProcessorException
     *             in the case of any problem with ORM or JDBC stack
     * @throws org.sqlproc.engine.SqlRuntimeException
     *             in the case of any problem with the input/output values handling
     */
    @SuppressWarnings("unchecked")
    public Object callFunction(final SqlSession session, final Object dynamicInputValues,
            final Object staticInputValues, final int maxTimeout) throws SqlProcessorException, SqlRuntimeException {
        if (logger.isDebugEnabled()) {
            logger.debug(">> callFunction, session=" + session + ", dynamicInputValues=" + dynamicInputValues
                    + ", staticInputValues=" + staticInputValues + ", maxTimeout=" + maxTimeout);
        }

        Object result = null;

        try {
            result = monitor.run(new SqlMonitor.Runner() {
                public Object run() {
                    SqlProcessResult processResult = statement.process(SqlMetaStatement.Type.CALL, dynamicInputValues,
                            staticInputValues, null, features, typeFactory);
                    SqlQuery query = session.createSqlQuery(processResult.getSql().toString());
                    if (maxTimeout > 0)
                        query.setTimeout(maxTimeout);
                    processResult.setQueryParams(session, query);
                    if (mapping != null) {
                        SqlMappingResult mappingResult = SqlMappingRule.merge(mapping, processResult);
                        mappingResult.setQueryResultMapping(Object.class, null, query);
                    }

                    Object result = query.callFunction();
                    processResult.postProcess();
                    return result;
                }
            }, Object.class);
            return result;
        } finally {
            if (logger.isDebugEnabled()) {
                logger.debug("<< callFunction, result=" + result);
            }
        }
    }

    /**
     * Returns the call statement derived from the META SQL statement. For the parameters description please see the
     * most complex execution method {@link #getSql(Object, Object, org.sqlproc.engine.impl.SqlMetaStatement.Type)} .
     */
    public String getCallSql(final Object dynamicInputValues, final Object staticInputValues)
            throws SqlProcessorException, SqlRuntimeException {
        return getSql(dynamicInputValues, staticInputValues, SqlMetaStatement.Type.CALL);
    }

    /**
     * Because SQL Processor is Data Driven Query engine, every input parameters can produce in fact different SQL
     * statement command. This method can help to identify the exact SQL statement command, which is produced in the
     * background of the SQL Processor execution. The statement is derived from the META SQL statement.
     * 
     * @param dynamicInputValues
     *            The object used for the stored procedure dynamic input values. The class of this object is also named
     *            as the input class or the dynamic parameters class. The exact class type isn't important, all the
     *            parameters settled into the SQL callable statement are picked up using the reflection API. At the same
     *            time this object can collect the output values from all OUT and INOUT stored procedure parameters.
     * @param staticInputValues
     *            The object used for the stored procedure static input values. The class of this object is also named
     *            as the input class or the static parameters class. The exact class type isn't important, all the
     *            parameters injected into the callable statement are picked up using the reflection API. Compared to
     *            dynamicInputValues input parameters, parameters in this class should't be produced by an end user to
     *            prevent SQL injection threat!
     * @param statementType
     *            The type of the statement under consideration. For the stored procedures it is CALL.
     * @return The SQL statement command derived from the META SQL statement based on the input parameters.
     * @throws org.hibernate.SqlProcessorException
     *             in the case of any problem with ORM or JDBC stack
     * @throws org.sqlproc.engine.SqlRuntimeException
     *             in the case of any problem with the input/output values handling
     */
    public String getSql(final Object dynamicInputValues, final Object staticInputValues,
            final SqlMetaStatement.Type statementType) throws SqlProcessorException, SqlRuntimeException {
        if (logger.isDebugEnabled()) {
            logger.debug(">> getSql, dynamicInputValues=" + dynamicInputValues + ", staticInputValues="
                    + staticInputValues);
        }

        String sql = null;

        try {
            sql = monitor.run(new SqlMonitor.Runner() {

                public String run() {
                    SqlProcessResult processResult = statement.process(statementType, dynamicInputValues,
                            staticInputValues, null, features, typeFactory);
                    return processResult.getSql().toString();
                }
            }, String.class);
            return sql;
        } finally {
            if (logger.isDebugEnabled()) {
                logger.debug("<< getSql, sql=" + sql);
            }
        }
    }

    /**
     * Returns the name of this META SQL, which uniquely identifies the instance. In the case the META SQL statement is
     * located in the queries.properties file, this name is the unique part of the keys in this file. For example for
     * the name ALL in the queries.properties file there's the META SQL statement with the name CRUD_ALL.
     * 
     * @return The name of the SQL engine instance.
     */
    public String getName() {
        return name;
    }

    /**
     * Returns the SQL Monitor instance for the runtime statistics gathering. By default no runtime statistics gathering
     * is active. So this SQL Monitor is implied in SQL engine constructor in the case the statistics gathering should
     * be engaged.
     * 
     * @return The SQL Monitor instance, which is active for this SQL engine instance.
     */
    public SqlMonitor getMonitor() {
        return monitor;
    }
}