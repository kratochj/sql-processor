package org.sqlproc.engine.plugin;

import java.lang.reflect.InvocationTargetException;
import java.util.Collection;
import java.util.Map;

import org.apache.commons.beanutils.MethodUtils;
import org.sqlproc.engine.SqlFeature;
import org.sqlproc.engine.impl.SqlProcessContext;
import org.sqlproc.engine.impl.SqlUtils;
import org.sqlproc.engine.type.SqlMetaType;

/**
 * The SQL Processor plugins test implementation.
 * 
 * @author <a href="mailto:ondrej.kotek@gmail.com">Ondřej Kotek</a>
 */
public class CustomizedSqlPlugins implements IsEmptyPlugin, IsTruePlugin {

    /**
     * The test supplement value used to detect the empty value and true value.
     */
    private static final String MODIFIER_ZERO = "zero";

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean isNotEmpty(String attributeName, Object obj, Object parentObj, SqlMetaType sqlMetaType,
            String sqlMetaTypeExt, boolean inSqlSetOrInsert, Map<String, String> values, Map<String, Object> features)
            throws IllegalArgumentException {
        String value = (sqlMetaTypeExt != null) ? sqlMetaTypeExt.toLowerCase() : null;

        if (MODIFIER_ZERO.equalsIgnoreCase(value)) {
            if (obj != null) {
                if (obj instanceof String) {
                    final String str = ((String) obj).trim();
                    return (!str.isEmpty() && !str.equalsIgnoreCase("0"));
                }
            } else {
                throw new IllegalArgumentException("obj with sqlMetaTypeExt '" + MODIFIER_ZERO + "' should not be null");
            }
        }

        boolean result = isNotEmptyInternal(attributeName, obj, parentObj, sqlMetaType, value, inSqlSetOrInsert,
                values, features);
        if (result)
            return result;
        if (MODIFIER_NOTEMPTY.equalsIgnoreCase(value)) {
            throw new IllegalArgumentException(MODIFIER_NOTEMPTY);
        }
        return result;
    }

    private boolean isNotEmptyInternal(String attributeName, Object obj, Object parentObj, SqlMetaType sqlMetaType,
            String inOutModifier, boolean inSqlSetOrInsert, Map<String, String> values, Map<String, Object> features)
            throws IllegalArgumentException {

        if (MODIFIER_NOTNULL.equalsIgnoreCase(inOutModifier)) {
            if (obj == null)
                throw new IllegalArgumentException(MODIFIER_NOTNULL);
        }

        if (inSqlSetOrInsert) {
            boolean isEmptyUseMethodIsNull = false;
            if (obj == null && attributeName != null && parentObj != null) {
                Object o = features.get(SqlFeature.EMPTY_USE_METHOD_IS_NULL);
                if (o != null && o instanceof Boolean && ((Boolean) o))
                    isEmptyUseMethodIsNull = true;
            }
            Object isNullObj = null;
            if (isEmptyUseMethodIsNull) {
                try {
                    isNullObj = MethodUtils.invokeMethod(parentObj, "isNull", attributeName);
                } catch (NoSuchMethodException e) {
                } catch (IllegalAccessException e) {
                    throw new RuntimeException(e);
                } catch (InvocationTargetException e) {
                    throw new RuntimeException(e);
                }

            }
            if (isNullObj != null && isNullObj instanceof Boolean && ((Boolean) isNullObj)) {
                return true;
            }
            boolean isEmptyForNull = isEmptyUseMethodIsNull;
            if (obj == null) {
                Object o = features.get(SqlFeature.EMPTY_FOR_NULL);
                if (o != null && o instanceof Boolean && ((Boolean) o))
                    isEmptyForNull = true;
                if (!isEmptyForNull)
                    return true;
            }
        }

        if (MODIFIER_ANY.equalsIgnoreCase(inOutModifier)) {
            return true;
        } else if (MODIFIER_NULL.equalsIgnoreCase(inOutModifier)) {
            if (obj == null)
                return true;
            else
                return false;
        } else {
            if (obj == null) {
                return false;
            } else if (obj instanceof Collection<?>) {
                if (((Collection<?>) obj).isEmpty()) {
                    if (MODIFIER_ANYSET.equalsIgnoreCase(inOutModifier) || MODIFIER_ANY.equalsIgnoreCase(inOutModifier))
                        return true;
                    else
                        return false;
                }
            } else if (obj.toString().length() <= 0) {
                return false;
            }
            return true;
        }
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean isTrue(String attributeName, Object obj, Object parentObj, SqlMetaType sqlMetaType,
            String sqlMetaTypeExt, Map<String, String> values, Map<String, Object> features) {
        if (MODIFIER_ZERO.equalsIgnoreCase(sqlMetaTypeExt)) {
            if (obj != null) {
                if (obj instanceof String) {
                    final String str = ((String) obj).trim();
                    return (str.length() > 0 && !str.equalsIgnoreCase("0"));
                }
            } else {
                throw new IllegalArgumentException("obj with sqlMetaTypeExt '" + MODIFIER_ZERO + "' should not be null");
            }
        }
        if (sqlMetaTypeExt == null) {
            if (obj != null) {
                if (obj instanceof Boolean) {
                    return ((Boolean) obj).booleanValue();
                } else if (obj instanceof String) {
                    String str = ((String) obj).trim();
                    return (str.length() > 0 && !str.equalsIgnoreCase("false"));
                } else if (obj instanceof Number) {
                    return ((Number) obj).longValue() > 0;
                } else if (obj.getClass().isEnum()) {
                    return true;
                } else {
                    return true; // not null
                }
            }
            return false;
        } else {
            if (obj == null) {
                if (sqlMetaTypeExt.toLowerCase().equalsIgnoreCase(MODIFIER_NULL))
                    return true;
                else
                    return false;
            } else {
                if (obj.getClass().isEnum()) {
                    if (obj.toString().equals(sqlMetaTypeExt)) {
                        return true;
                    } else if (sqlMetaType == SqlProcessContext.getTypeFactory().getEnumStringType()) {
                        return sqlMetaTypeExt.equals(SqlUtils.getEnumToValue(obj));
                    } else if (sqlMetaType == SqlProcessContext.getTypeFactory().getEnumIntegerType()) {
                        return sqlMetaTypeExt.equals(SqlUtils.getEnumToValue(obj).toString());
                    } else {
                        Object enumVal = SqlUtils.getEnumToValue(obj);
                        if (enumVal.toString().equals(sqlMetaTypeExt))
                            return true;
                        return false;
                    }
                } else {
                    if (obj.toString().equals(sqlMetaTypeExt))
                        return true;
                    else
                        return false;
                }
            }
        }
    }

}
