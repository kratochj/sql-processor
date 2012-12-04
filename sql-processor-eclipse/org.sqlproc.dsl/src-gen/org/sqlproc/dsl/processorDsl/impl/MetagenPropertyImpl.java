/**
 */
package org.sqlproc.dsl.processorDsl.impl;

import java.util.Collection;

import org.eclipse.emf.common.notify.Notification;
import org.eclipse.emf.common.notify.NotificationChain;

import org.eclipse.emf.common.util.EList;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.InternalEObject;

import org.eclipse.emf.ecore.impl.ENotificationImpl;
import org.eclipse.emf.ecore.impl.MinimalEObjectImpl;

import org.eclipse.emf.ecore.util.EObjectContainmentEList;
import org.eclipse.emf.ecore.util.InternalEList;

import org.sqlproc.dsl.processorDsl.MetaTypeAssignement;
import org.sqlproc.dsl.processorDsl.MetagenProperty;
import org.sqlproc.dsl.processorDsl.ProcessorDslPackage;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model object '<em><b>Metagen Property</b></em>'.
 * <!-- end-user-doc -->
 * <p>
 * The following features are implemented:
 * <ul>
 *   <li>{@link org.sqlproc.dsl.processorDsl.impl.MetagenPropertyImpl#getName <em>Name</em>}</li>
 *   <li>{@link org.sqlproc.dsl.processorDsl.impl.MetagenPropertyImpl#getSequence <em>Sequence</em>}</li>
 *   <li>{@link org.sqlproc.dsl.processorDsl.impl.MetagenPropertyImpl#getType <em>Type</em>}</li>
 *   <li>{@link org.sqlproc.dsl.processorDsl.impl.MetagenPropertyImpl#getDbTable <em>Db Table</em>}</li>
 *   <li>{@link org.sqlproc.dsl.processorDsl.impl.MetagenPropertyImpl#getIdentity <em>Identity</em>}</li>
 *   <li>{@link org.sqlproc.dsl.processorDsl.impl.MetagenPropertyImpl#getMetaTypes <em>Meta Types</em>}</li>
 *   <li>{@link org.sqlproc.dsl.processorDsl.impl.MetagenPropertyImpl#getDbStatement <em>Db Statement</em>}</li>
 * </ul>
 * </p>
 *
 * @generated
 */
public class MetagenPropertyImpl extends MinimalEObjectImpl.Container implements MetagenProperty
{
  /**
   * The default value of the '{@link #getName() <em>Name</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getName()
   * @generated
   * @ordered
   */
  protected static final String NAME_EDEFAULT = null;

  /**
   * The cached value of the '{@link #getName() <em>Name</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getName()
   * @generated
   * @ordered
   */
  protected String name = NAME_EDEFAULT;

  /**
   * The default value of the '{@link #getSequence() <em>Sequence</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getSequence()
   * @generated
   * @ordered
   */
  protected static final String SEQUENCE_EDEFAULT = null;

  /**
   * The cached value of the '{@link #getSequence() <em>Sequence</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getSequence()
   * @generated
   * @ordered
   */
  protected String sequence = SEQUENCE_EDEFAULT;

  /**
   * The default value of the '{@link #getType() <em>Type</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getType()
   * @generated
   * @ordered
   */
  protected static final String TYPE_EDEFAULT = null;

  /**
   * The cached value of the '{@link #getType() <em>Type</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getType()
   * @generated
   * @ordered
   */
  protected String type = TYPE_EDEFAULT;

  /**
   * The default value of the '{@link #getDbTable() <em>Db Table</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getDbTable()
   * @generated
   * @ordered
   */
  protected static final String DB_TABLE_EDEFAULT = null;

  /**
   * The cached value of the '{@link #getDbTable() <em>Db Table</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getDbTable()
   * @generated
   * @ordered
   */
  protected String dbTable = DB_TABLE_EDEFAULT;

  /**
   * The default value of the '{@link #getIdentity() <em>Identity</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getIdentity()
   * @generated
   * @ordered
   */
  protected static final String IDENTITY_EDEFAULT = null;

  /**
   * The cached value of the '{@link #getIdentity() <em>Identity</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getIdentity()
   * @generated
   * @ordered
   */
  protected String identity = IDENTITY_EDEFAULT;

  /**
   * The cached value of the '{@link #getMetaTypes() <em>Meta Types</em>}' containment reference list.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getMetaTypes()
   * @generated
   * @ordered
   */
  protected EList<MetaTypeAssignement> metaTypes;

  /**
   * The default value of the '{@link #getDbStatement() <em>Db Statement</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getDbStatement()
   * @generated
   * @ordered
   */
  protected static final String DB_STATEMENT_EDEFAULT = null;

  /**
   * The cached value of the '{@link #getDbStatement() <em>Db Statement</em>}' attribute.
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @see #getDbStatement()
   * @generated
   * @ordered
   */
  protected String dbStatement = DB_STATEMENT_EDEFAULT;

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  protected MetagenPropertyImpl()
  {
    super();
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  protected EClass eStaticClass()
  {
    return ProcessorDslPackage.Literals.METAGEN_PROPERTY;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public String getName()
  {
    return name;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setName(String newName)
  {
    String oldName = name;
    name = newName;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ProcessorDslPackage.METAGEN_PROPERTY__NAME, oldName, name));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public String getSequence()
  {
    return sequence;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setSequence(String newSequence)
  {
    String oldSequence = sequence;
    sequence = newSequence;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ProcessorDslPackage.METAGEN_PROPERTY__SEQUENCE, oldSequence, sequence));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public String getType()
  {
    return type;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setType(String newType)
  {
    String oldType = type;
    type = newType;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ProcessorDslPackage.METAGEN_PROPERTY__TYPE, oldType, type));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public String getDbTable()
  {
    return dbTable;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setDbTable(String newDbTable)
  {
    String oldDbTable = dbTable;
    dbTable = newDbTable;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ProcessorDslPackage.METAGEN_PROPERTY__DB_TABLE, oldDbTable, dbTable));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public String getIdentity()
  {
    return identity;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setIdentity(String newIdentity)
  {
    String oldIdentity = identity;
    identity = newIdentity;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ProcessorDslPackage.METAGEN_PROPERTY__IDENTITY, oldIdentity, identity));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public EList<MetaTypeAssignement> getMetaTypes()
  {
    if (metaTypes == null)
    {
      metaTypes = new EObjectContainmentEList<MetaTypeAssignement>(MetaTypeAssignement.class, this, ProcessorDslPackage.METAGEN_PROPERTY__META_TYPES);
    }
    return metaTypes;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public String getDbStatement()
  {
    return dbStatement;
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  public void setDbStatement(String newDbStatement)
  {
    String oldDbStatement = dbStatement;
    dbStatement = newDbStatement;
    if (eNotificationRequired())
      eNotify(new ENotificationImpl(this, Notification.SET, ProcessorDslPackage.METAGEN_PROPERTY__DB_STATEMENT, oldDbStatement, dbStatement));
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public NotificationChain eInverseRemove(InternalEObject otherEnd, int featureID, NotificationChain msgs)
  {
    switch (featureID)
    {
      case ProcessorDslPackage.METAGEN_PROPERTY__META_TYPES:
        return ((InternalEList<?>)getMetaTypes()).basicRemove(otherEnd, msgs);
    }
    return super.eInverseRemove(otherEnd, featureID, msgs);
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public Object eGet(int featureID, boolean resolve, boolean coreType)
  {
    switch (featureID)
    {
      case ProcessorDslPackage.METAGEN_PROPERTY__NAME:
        return getName();
      case ProcessorDslPackage.METAGEN_PROPERTY__SEQUENCE:
        return getSequence();
      case ProcessorDslPackage.METAGEN_PROPERTY__TYPE:
        return getType();
      case ProcessorDslPackage.METAGEN_PROPERTY__DB_TABLE:
        return getDbTable();
      case ProcessorDslPackage.METAGEN_PROPERTY__IDENTITY:
        return getIdentity();
      case ProcessorDslPackage.METAGEN_PROPERTY__META_TYPES:
        return getMetaTypes();
      case ProcessorDslPackage.METAGEN_PROPERTY__DB_STATEMENT:
        return getDbStatement();
    }
    return super.eGet(featureID, resolve, coreType);
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @SuppressWarnings("unchecked")
  @Override
  public void eSet(int featureID, Object newValue)
  {
    switch (featureID)
    {
      case ProcessorDslPackage.METAGEN_PROPERTY__NAME:
        setName((String)newValue);
        return;
      case ProcessorDslPackage.METAGEN_PROPERTY__SEQUENCE:
        setSequence((String)newValue);
        return;
      case ProcessorDslPackage.METAGEN_PROPERTY__TYPE:
        setType((String)newValue);
        return;
      case ProcessorDslPackage.METAGEN_PROPERTY__DB_TABLE:
        setDbTable((String)newValue);
        return;
      case ProcessorDslPackage.METAGEN_PROPERTY__IDENTITY:
        setIdentity((String)newValue);
        return;
      case ProcessorDslPackage.METAGEN_PROPERTY__META_TYPES:
        getMetaTypes().clear();
        getMetaTypes().addAll((Collection<? extends MetaTypeAssignement>)newValue);
        return;
      case ProcessorDslPackage.METAGEN_PROPERTY__DB_STATEMENT:
        setDbStatement((String)newValue);
        return;
    }
    super.eSet(featureID, newValue);
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public void eUnset(int featureID)
  {
    switch (featureID)
    {
      case ProcessorDslPackage.METAGEN_PROPERTY__NAME:
        setName(NAME_EDEFAULT);
        return;
      case ProcessorDslPackage.METAGEN_PROPERTY__SEQUENCE:
        setSequence(SEQUENCE_EDEFAULT);
        return;
      case ProcessorDslPackage.METAGEN_PROPERTY__TYPE:
        setType(TYPE_EDEFAULT);
        return;
      case ProcessorDslPackage.METAGEN_PROPERTY__DB_TABLE:
        setDbTable(DB_TABLE_EDEFAULT);
        return;
      case ProcessorDslPackage.METAGEN_PROPERTY__IDENTITY:
        setIdentity(IDENTITY_EDEFAULT);
        return;
      case ProcessorDslPackage.METAGEN_PROPERTY__META_TYPES:
        getMetaTypes().clear();
        return;
      case ProcessorDslPackage.METAGEN_PROPERTY__DB_STATEMENT:
        setDbStatement(DB_STATEMENT_EDEFAULT);
        return;
    }
    super.eUnset(featureID);
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public boolean eIsSet(int featureID)
  {
    switch (featureID)
    {
      case ProcessorDslPackage.METAGEN_PROPERTY__NAME:
        return NAME_EDEFAULT == null ? name != null : !NAME_EDEFAULT.equals(name);
      case ProcessorDslPackage.METAGEN_PROPERTY__SEQUENCE:
        return SEQUENCE_EDEFAULT == null ? sequence != null : !SEQUENCE_EDEFAULT.equals(sequence);
      case ProcessorDslPackage.METAGEN_PROPERTY__TYPE:
        return TYPE_EDEFAULT == null ? type != null : !TYPE_EDEFAULT.equals(type);
      case ProcessorDslPackage.METAGEN_PROPERTY__DB_TABLE:
        return DB_TABLE_EDEFAULT == null ? dbTable != null : !DB_TABLE_EDEFAULT.equals(dbTable);
      case ProcessorDslPackage.METAGEN_PROPERTY__IDENTITY:
        return IDENTITY_EDEFAULT == null ? identity != null : !IDENTITY_EDEFAULT.equals(identity);
      case ProcessorDslPackage.METAGEN_PROPERTY__META_TYPES:
        return metaTypes != null && !metaTypes.isEmpty();
      case ProcessorDslPackage.METAGEN_PROPERTY__DB_STATEMENT:
        return DB_STATEMENT_EDEFAULT == null ? dbStatement != null : !DB_STATEMENT_EDEFAULT.equals(dbStatement);
    }
    return super.eIsSet(featureID);
  }

  /**
   * <!-- begin-user-doc -->
   * <!-- end-user-doc -->
   * @generated
   */
  @Override
  public String toString()
  {
    if (eIsProxy()) return super.toString();

    StringBuffer result = new StringBuffer(super.toString());
    result.append(" (name: ");
    result.append(name);
    result.append(", sequence: ");
    result.append(sequence);
    result.append(", type: ");
    result.append(type);
    result.append(", dbTable: ");
    result.append(dbTable);
    result.append(", identity: ");
    result.append(identity);
    result.append(", dbStatement: ");
    result.append(dbStatement);
    result.append(')');
    return result.toString();
  }

} //MetagenPropertyImpl