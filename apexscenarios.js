const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const { default: ApexScenarios } = require("../../frontend/src/components/ApexScenarios");

const apexScenarios = [
  // --- Beginner Level Questions ---
  {
    id: 101,
    title: "Add Two Integers",
    level: "Beginner",
    description: "Write a method that takes two integers as input and returns their sum.",
    starterCode: `public class MathUtils {\n  public static Integer addIntegers(Integer a, Integer b) {\n    // Your code here\n  }\n}`,
    hints: [
      "Create a method that accepts two integer parameters.",
      "Use the + operator to add them together.",
      "Return the result.",
      "Think about the method signature and return type (Integer)."
    ]
  },
  {
    id: 102,
    title: "Check Even or Odd",
    level: "Beginner",
    description: "Write a method that accepts an integer and returns true if the number is even, false otherwise.",
    starterCode: `public class MathUtils {\n  public static Boolean isEven(Integer n) {\n    // Your code here\n  }\n}`,
    hints: [
      "Accept an integer input.",
      "Use Math.mod(n, 2) to get the remainder when divided by 2.",
      "If remainder is 0, the number is even; else it is odd.",
      "Return true or false accordingly."
    ]
  },
  {
    id: 103,
    title: "Find Maximum of Two Numbers",
    level: "Beginner",
    description: "Write a method that takes two integers and returns the larger one.",
    starterCode: `public class MathUtils {\n  public static Integer max(Integer a, Integer b) {\n    // Your code here\n  }\n}`,
    hints: [
      "Accept two integers.",
      "Use an if-else condition to compare them.",
      "Return the larger one.",
      "Alternatively, use ternary operator: (a > b) ? a : b."
    ]
  },
  {
    id: 104,
    title: "Reverse a String",
    level: "Beginner",
    description: "Write a method that takes a string and returns it reversed.",
    starterCode: `public class StringUtils {\n  public static String reverseString(String input) {\n    // Your code here\n  }\n}`,
    hints: [
      "Take the input string.",
      "Initialize an empty string to build the reversed result.",
      "Loop from the last character index to the first index (length-1 to 0).",
      "In each iteration, append the current character to the result string.",
      "Return the reversed string after the loop."
    ]
  },
  {
    id: 105,
    title: "Count Vowels in a String",
    level: "Beginner",
    description: "Write a method that counts the number of vowels (a, e, i, o, u) in a string.",
    starterCode: `public class StringUtils {\n  public static Integer countVowels(String input) {\n    // Your code here\n  }\n}`,
    hints: [
      "Take input string and initialize a counter variable to 0.",
      "Loop through each character of the string.",
      "For each character, check if it is one of a, e, i, o, u (consider lowercase and uppercase).",
      "Increment the counter if a vowel is found.",
      "Return the count after the loop ends."
    ]
  },
  {
    id: 106,
    title: "Check if a String is Palindrome",
    level: "Beginner",
    description: "Write a method that returns true if the input string is the same backward and forward, otherwise false.",
    starterCode: `public class StringUtils {\n  public static Boolean isPalindrome(String input) {\n    // Your code here\n  }\n}`,
    hints: [
      "Compare characters from the start and the end moving towards the center.",
      "Use two pointers: one at the beginning (index 0) and one at the end (index length-1).",
      "In a loop, check if characters at both pointers are equal.",
      "If any pair doesn’t match, return false.",
      "If all match, return true at the end."
    ]
  },
  {
    id: 107,
    title: "Calculate Factorial of a Number",
    level: "Beginner",
    description: "Write a method that calculates the factorial of a given non-negative integer.",
    starterCode: `public class MathUtils {\n  public static Integer factorial(Integer n) {\n    // Your code here\n  }\n}`,
    hints: [
      "Accept a non-negative integer.",
      "Initialize a result variable to 1.",
      "Use a loop from 1 to n.",
      "Multiply the result by the loop counter each time.",
      "Return the result.",
      "Remember factorial of 0 is 1 by definition."
    ]
  },
  {
    id: 108,
    title: "Find the Smallest Number in a List",
    level: "Beginner",
    description: "Write a method that takes a list of integers and returns the smallest number.",
    starterCode: `public class MathUtils {\n  public static Integer findSmallest(List<Integer> nums) {\n    // Your code here\n  }\n}`,
    hints: [
      "Accept a list of integers.",
      "Initialize a variable minValue to the first element of the list.",
      "Loop through the list and compare each element with minValue.",
      "If the current element is smaller, update minValue.",
      "Return minValue after the loop."
    ]
  },
  {
    id: 109,
    title: "Sum of All Elements in a List",
    level: "Beginner",
    description: "Write a method that sums all integers in a list and returns the total.",
    starterCode: `public class MathUtils {\n  public static Integer sumList(List<Integer> nums) {\n    // Your code here\n  }\n}`,
    hints: [
      "Accept a list of integers.",
      "Initialize a sum variable to 0.",
      "Loop through the list, adding each element to the sum.",
      "Return the sum after the loop."
    ]
  },
  {
    id: 110,
    title: "Check if a List Contains a Value",
    level: "Beginner",
    description: "Write a method that returns true if a list contains a specified integer.",
    starterCode: `public class MathUtils {\n  public static Boolean containsValue(List<Integer> nums, Integer target) {\n    // Your code here\n  }\n}`,
    hints: [
      "Accept a list and a value to check.",
      "Use List.contains() method (simplest way), or loop through the list and compare each element with the target value.",
      "Return true if found, else false."
    ]
  },
  {
    id: 111,
    title: "Remove Duplicates from a List",
    level: "Beginner",
    description: "Write a method that takes a list of integers and returns a new list with duplicates removed.",
    starterCode: `public class ListUtils {\n  public static List<Integer> removeDuplicates(List<Integer> nums) {\n    // Your code here\n  }\n}`,
    hints: [
      "Accept a list of integers.",
      "Create an empty Set<Integer>.",
      "Loop through the list and add each element to the set (sets do not allow duplicates).",
      "Convert the set back to a list and return it."
    ]
  },
  {
    id: 112,
    title: "Convert List of Strings to Uppercase",
    level: "Beginner",
    description: "Write a method that converts all strings in a list to uppercase and returns the updated list.",
    starterCode: `public class StringUtils {\n  public static List<String> toUpperCaseList(List<String> items) {\n    // Your code here\n  }\n}`,
    hints: [
      "Accept a list of strings.",
      "Loop through the list using an index.",
      "Use String.toUpperCase() on each element and replace the list element with the uppercase version.",
      "Return the updated list."
    ]
  },
  {
    id: 113,
    title: "Create and Insert a Contact Record",
    level: "Beginner",
    description: "Write code to create a new Contact record with some fields and insert it into Salesforce.",
    starterCode: `Contact c = new Contact();\n// Set fields here\n// Insert the contact\n`,
    hints: [
      "Create a new instance of Contact object: Contact c = new Contact();",
      "Set fields like FirstName, LastName, and Email.",
      "Use insert c; to save it to Salesforce.",
      "Handle exceptions if needed."
    ]
  },
  {
    id: 114,
    title: "Query Accounts with More Than 10 Employees",
    level: "Beginner",
    description: "Write a SOQL query to retrieve Accounts with NumberOfEmployees > 10.",
    starterCode: `List<Account> accs = [SELECT Id, Name FROM Account WHERE NumberOfEmployees > 10];\n// Further logic here\n`,
    hints: [
      "Use SOQL query: SELECT Id, Name FROM Account WHERE NumberOfEmployees > 10.",
      "Assign query result to a list of Accounts.",
      "Loop through the list to perform further logic if needed."
    ]
  },
  {
    id: 115,
    title: "Update Account Names",
    level: "Beginner",
    description: "Write a method that updates the name of all Accounts in a list by appending \" - Updated\" to their existing names.",
    starterCode: `public class AccountUtils {\n  public static void updateAccountNames(List<Account> accs) {\n    // Your code here\n  }\n}`,
    hints: [
      "Accept a list of accounts.",
      "Loop through each account and append \" - Updated\" to the Name field.",
      "Use update DML on the list to save changes."
    ]
  },
  {
    id: 116,
    title: "Delete Contacts Older Than 1 Year",
    level: "Beginner",
    description: "Write code that deletes Contacts whose CreatedDate is older than one year from today.",
    starterCode: `List<Contact> oldContacts = [SELECT Id FROM Contact WHERE CreatedDate < LAST_N_DAYS:365];\n// Delete logic here\n`,
    hints: [
      "Use SOQL query to select contacts with CreatedDate < LAST_N_DAYS:365.",
      "Store the results in a list.",
      "Use delete DML statement on the list.",
      "Handle exceptions as needed."
    ]
  },
  {
    id: 117,
    title: "Trigger to Set Default Contact Phone Number",
    level: "Beginner",
    description: "Write an after insert trigger on Contact that sets the Phone field to \"123-456-7890\" if it’s blank.",
    starterCode: `trigger SetDefaultPhone on Contact (after insert) {\n  // Your code here\n}`,
    hints: [
      "Write an after insert trigger on Contact.",
      "Loop through Trigger.new contacts.",
      "For any contact with blank Phone field, set it to \"123-456-7890\".",
      "Update the contacts with modified Phone numbers."
    ]
  },
  {
    id: 118,
    title: "Calculate Average of a List of Decimals",
    level: "Beginner",
    description: "Write a method that calculates and returns the average value from a list of decimal numbers.",
    starterCode: `public class MathUtils {\n  public static Decimal average(List<Decimal> nums) {\n    // Your code here\n  }\n}`,
    hints: [
      "Accept a list of decimals.",
      "Sum all elements using a loop.",
      "Divide the sum by the number of elements (use list.size()).",
      "Handle case when list is empty to avoid division by zero."
    ]
  },
  {
    id: 119,
    title: "Check if a String Contains Only Digits",
    level: "Beginner",
    description: "Write a method that returns true if the input string consists only of digits (0-9).",
    starterCode: `public class StringUtils {\n  public static Boolean isOnlyDigits(String input) {\n    // Your code here\n  }\n}`,
    hints: [
      "Loop through each character of the string.",
      "Use Character.isDigit() or compare ASCII values to check if character is a digit.",
      "Return false if any character is not a digit.",
      "Return true if all are digits."
    ]
  },
  {
    id: 120,
    title: "Send an Email Notification",
    level: "Beginner",
    description: "Write code to send an email with subject and body to a given email address.",
    starterCode: `Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();\n// Set fields and send\n`,
    hints: [
      "Create an instance of Messaging.SingleEmailMessage.",
      "Set recipient email address, subject, and body text.",
      "Use Messaging.sendEmail() method to send the email.",
      "Check Salesforce governor limits for emails sent."
    ]
  },
  // --- Intermediate Level Questions ---
  {
    id: 201,
    title: "Update Contacts’ Phone Numbers for All Accounts in a List",
    level: "Intermediate",
    description: "Given a list of Account IDs, query all Contacts under those Accounts and update their Phone field to \"555-000-1234\".",
    starterCode: `public class ContactUtils {\n  public static void updatePhones(List<Id> accountIds) {\n    // Your code here\n  }\n}`,
    hints: [
      "Accept a List<Id> of Account IDs.",
      "Query Contacts where AccountId IN :accountIds.",
      "Loop through Contacts and set Phone.",
      "Perform an update DML on the modified Contacts."
    ]
  },
  {
    id: 202,
    title: "Get Total Number of Contacts per Account",
    level: "Intermediate",
    description: "Query all Accounts and map each Account’s ID to the total count of Contacts it has.",
    starterCode: `public class AccountUtils {\n  public static Map<Id, Integer> getContactCounts() {\n    // Your code here\n  }\n}`,
    hints: [
      "Use AggregateResult query: SELECT AccountId, COUNT(Id) FROM Contact GROUP BY AccountId.",
      "Create a Map<Id, Integer> for AccountId to Contact count.",
      "Loop through the query result and populate the map."
    ]
  },
  {
    id: 203,
    title: "Set Owner of Contacts Based on Parent Account Owner",
    level: "Intermediate",
    description: "For a list of Contact IDs, update each Contact’s OwnerId to match the parent Account’s OwnerId.",
    starterCode: `public class ContactUtils {\n  public static void syncContactOwners(List<Id> contactIds) {\n    // Your code here\n  }\n}`,
    hints: [
      "Query Contacts and include Account.OwnerId in the SOQL.",
      "Use a loop to set Contact.OwnerId = Contact.Account.OwnerId.",
      "Update the modified Contacts."
    ]
  },
  {
    id: 204,
    title: "Find Accounts with More Than 5 Opportunities",
    level: "Intermediate",
    description: "Query all Accounts with more than 5 related Opportunities and return a Set<Id> of such Account IDs.",
    starterCode: `public class AccountUtils {\n  public static Set<Id> accountsWithManyOpps() {\n    // Your code here\n  }\n}`,
    hints: [
      "Use AggregateResult query: SELECT AccountId, COUNT(Id) FROM Opportunity GROUP BY AccountId HAVING COUNT(Id) > 5.",
      "Create a Set<Id> and add AccountIds from the query."
    ]
  },
  {
    id: 205,
    title: "Update Contact Email When Related Account Has Specific Industry",
    level: "Intermediate",
    description: "Update the Email of all Contacts whose parent Account’s Industry is \"Technology\" to \"tech@example.com\".",
    starterCode: `public class ContactUtils {\n  public static void updateTechEmails() {\n    // Your code here\n  }\n}`,
    hints: [
      "Query Contacts with Account.Industry = 'Technology'.",
      "Loop through the Contacts, set Email.",
      "Update the Contacts list."
    ]
  },
  {
    id: 206,
    title: "Use a Set to Filter Unique Account Names",
    level: "Intermediate",
    description: "Given a list of Accounts, extract unique Account names and return a Set<String>.",
    starterCode: `public class AccountUtils {\n  public static Set<String> uniqueNames(List<Account> accs) {\n    // Your code here\n  }\n}`,
    hints: [
      "Accept a List<Account>.",
      "Create an empty Set<String>.",
      "Loop through the Accounts and add account.Name to the set."
    ]
  },
  {
    id: 207,
    title: "Query Opportunities Based on a Set of Stage Names",
    level: "Intermediate",
    description: "Given a Set<String> of Stage names (like \"Closed Won\", \"Prospecting\"), query all Opportunities with those Stage names.",
    starterCode: `public class OpportunityUtils {\n  public static List<Opportunity> getByStages(Set<String> stages) {\n    // Your code here\n  }\n}`,
    hints: [
      "Use SOQL: SELECT Id, Name FROM Opportunity WHERE StageName IN :stageNames.",
      "Return the queried list."
    ]
  },
  {
    id: 208,
    title: "Delete Tasks Related to a Set of Accounts",
    level: "Intermediate",
    description: "Given a Set<Id> of Account IDs, query all Tasks where WhatId is an Account and delete them.",
    starterCode: `public class TaskUtils {\n  public static void deleteAccountTasks(Set<Id> accountIds) {\n    // Your code here\n  }\n}`,
    hints: [
      "Use WhatId IN :accountIds AND What.Type = 'Account' in SOQL.",
      "Delete the queried Tasks."
    ]
  },
  {
    id: 209,
    title: "Create a Map of AccountId to List of Related Contacts",
    level: "Intermediate",
    description: "Query all Contacts and group them into a Map<Id, List<Contact>> based on their AccountId.",
    starterCode: `public class ContactUtils {\n  public static Map<Id, List<Contact>> contactsByAccount() {\n    // Your code here\n  }\n}`,
    hints: [
      "Query all Contacts, get Id, AccountId.",
      "Create a Map<Id, List<Contact>>.",
      "Loop through Contacts, use map.containsKey(AccountId) and map.get(AccountId).add(Contact)."
    ]
  },
  {
    id: 210,
    title: "Map of ContactId to Parent Account Name",
    level: "Intermediate",
    description: "Query a list of Contact IDs and return a Map<Id, String> where key = ContactId and value = parent Account name.",
    starterCode: `public class ContactUtils {\n  public static Map<Id, String> contactToAccountName(List<Id> contactIds) {\n    // Your code here\n  }\n}`,
    hints: [
      "Query Contacts where Id IN :contactIds and include Account.Name.",
      "Create a map and populate using Contact.Id and Contact.Account.Name."
    ]
  },
  {
    id: 211,
    title: "Update Child Opportunity Stages When Account Industry Changes",
    level: "Intermediate",
    description: "When the Industry field of an Account is changed to \"Healthcare\", update all related Opportunities to have Stage \"Prospecting\".",
    starterCode: `public class OpportunityUtils {\n  public static void updateOppStages(List<Account> updatedAccounts) {\n    // Your code here\n  }\n}`,
    hints: [
      "In trigger or method, get list of updated Accounts with Industry == 'Healthcare'.",
      "Query related Opportunities.",
      "Set StageName = 'Prospecting'.",
      "Update the Opportunities."
    ]
  },
  {
    id: 212,
    title: "List All Contacts Under Accounts from a Specific Region",
    level: "Intermediate",
    description: "Query Contacts whose parent Account's BillingCountry is \"USA\". Return as a List<Contact>.",
    starterCode: `public class ContactUtils {\n  public static List<Contact> contactsInUSA() {\n    // Your code here\n  }\n}`,
    hints: [
      "Use Contact SOQL with WHERE Account.BillingCountry = 'USA'.",
      "Return the list."
    ]
  },
  {
    id: 213,
    title: "Map of AccountId to Total Opportunity Amount",
    level: "Intermediate",
    description: "Query all Opportunities, group by AccountId, and calculate total Amount. Return Map<Id, Decimal>.",
    starterCode: `public class OpportunityUtils {\n  public static Map<Id, Decimal> totalAmountByAccount() {\n    // Your code here\n  }\n}`,
    hints: [
      "Use SOQL aggregate query: SELECT AccountId, SUM(Amount) FROM Opportunity GROUP BY AccountId.",
      "Populate the map with AccountId and total amount."
    ]
  },
  {
    id: 214,
    title: "List of Accounts with No Contacts",
    level: "Intermediate",
    description: "Query Accounts that don’t have any Contacts related.",
    starterCode: `public class AccountUtils {\n  public static List<Account> accountsWithNoContacts() {\n    // Your code here\n  }\n}`,
    hints: [
      "Use subquery or left outer join logic.",
      "Query Accounts where Id NOT IN (SELECT AccountId FROM Contact)."
    ]
  },
  {
    id: 215,
    title: "Set of Contact Emails for a Given List of Accounts",
    level: "Intermediate",
    description: "Given a list of Account IDs, get the unique emails of all related Contacts as a Set<String>.",
    starterCode: `public class ContactUtils {\n  public static Set<String> emailsForAccounts(List<Id> accountIds) {\n    // Your code here\n  }\n}`,
    hints: [
      "Query Contacts where AccountId IN :accountIds.",
      "Create a Set<String> and add Email for each Contact."
    ]
  },
  {
    id: 216,
    title: "Map of Opportunity Id to Last Modified Date",
    level: "Intermediate",
    description: "Query Opportunities and create a Map<Id, DateTime> mapping Opportunity Ids to their LastModifiedDate.",
    starterCode: `public class OpportunityUtils {\n  public static Map<Id, DateTime> oppLastModified() {\n    // Your code here\n  }\n}`,
    hints: [
      "Query Opportunities for Id, LastModifiedDate.",
      "Populate the map with these fields."
    ]
  },
  {
    id: 217,
    title: "Update Contact Mailing Address from Account Billing Address",
    level: "Intermediate",
    description: "For a list of Contact IDs, update each Contact’s MailingAddress fields (Street, City, State, PostalCode, Country) from its parent Account’s BillingAddress fields.",
    starterCode: `public class ContactUtils {\n  public static void syncAddresses(List<Id> contactIds) {\n    // Your code here\n  }\n}`,
    hints: [
      "Query Contacts and include Account.BillingAddress fields.",
      "Loop through Contacts and set MailingAddress fields.",
      "Update the modified Contacts."
    ]
  },
  {
    id: 218,
    title: "List of Accounts with At Least One Closed-Won Opportunity",
    level: "Intermediate",
    description: "Query all Accounts where there exists at least one Opportunity with StageName = 'Closed Won'.",
    starterCode: `public class AccountUtils {\n  public static List<Account> accountsWithClosedWon() {\n    // Your code here\n  }\n}`,
    hints: [
      "Use subquery: SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Closed Won')."
    ]
  },
  {
    id: 219,
    title: "Map of Account Name to Count of Related Contacts",
    level: "Intermediate",
    description: "Query Accounts and count how many Contacts each has, returning Map<String, Integer>.",
    starterCode: `public class AccountUtils {\n  public static Map<String, Integer> contactCountByAccountName() {\n    // Your code here\n  }\n}`,
    hints: [
      "Use AggregateResult on Contact grouped by Account.Name.",
      "Populate the map with Account.Name and count."
    ]
  },
  {
    id: 220,
    title: "Update Opportunity Close Date to Today for a Given Stage",
    level: "Intermediate",
    description: "For all Opportunities in a certain Stage (e.g. \"Negotiation\"), update the CloseDate to today’s date.",
    starterCode: `public class OpportunityUtils {\n  public static void updateCloseDate(String stageName) {\n    // Your code here\n  }\n}`,
    hints: [
      "Query Opportunities with StageName = 'Negotiation'.",
      "Set CloseDate = Date.today().",
      "Update the Opportunities."
    ]
  },
  // --- Master Level Questions ---
  {
    id: 301,
    title: "Bulk Update Accounts Based on Contact Count",
    level: "Master",
    description: "Update the Type field of Account records to 'High Touch' if they have more than 3 associated Contact records.",
    starterCode: `public class AccountUtils {\n  public static void updateHighTouchAccounts() {\n    // Your code here\n  }\n}`,
    hints: [
      "Aggregate Contact Counts: Use an aggregate SOQL query to count the number of Contact records per Account.",
      "Identify Relevant Accounts: Iterate through the aggregate results to identify Account IDs with more than 3 Contacts.",
      "Update Account Records: Query the Account records using the identified IDs and update their Type field accordingly.",
      "Bulkify Operations: Ensure all operations are bulkified to handle large data volumes efficiently.",
      "Avoid SOQL/DML in Loops: Place all SOQL queries and DML operations outside of loops to adhere to best practices."
    ]
  },
  {
    id: 302,
    title: "HTTP POST Callout to External System",
    level: "Master",
    description: "Send Contact details (Name, Email, Phone) to an external REST API via HTTP POST.",
    starterCode: `public class ContactCallout {\n  @future(callout=true)\n  public static void sendContact(Set<Id> contactIds) {\n    // Your code here\n  }\n}`,
    hints: [
      "Create a Named Credential for authentication with the external system.",
      "Develop an Apex class with a method to perform the HTTP POST callout.",
      "Serialize Contact Data: Use JSON.serialize() to convert Contact data into JSON format.",
      "Handle Responses: Implement logic to handle successful and failed responses appropriately.",
      "Asynchronous Processing: Use @future or Queueable Apex to perform the callout asynchronously."
    ]
  },
  {
    id: 303,
    title: "Queueable Apex to Update Opportunities on Account Industry Change",
    level: "Master",
    description: "When an Account's Industry field is updated, update related Opportunities to have Stage = 'Prospecting'.",
    starterCode: `public class OpportunityUpdater implements Queueable {\n  public void execute(QueueableContext context) {\n    // Your code here\n  }\n}`,
    hints: [
      "Trigger on Account Update: Create a trigger on the Account object to detect changes in the Industry field.",
      "Enqueue Queueable Job: From the trigger, enqueue a Queueable Apex job, passing the list of updated Account IDs.",
      "Process Opportunities: In the Queueable class, query related Opportunities and update their Stage field.",
      "Bulk Processing: Ensure the Queueable class processes records in bulk to handle large data volumes.",
      "Prevent Recursion: Implement logic to prevent recursive updates if necessary."
    ]
  },
  {
    id: 304,
    title: "Permission Check Before Querying Contacts",
    level: "Master",
    description: "Before querying Contact records, verify that the running user has Read access to the Contact object.",
    starterCode: `public class ContactAccessChecker {\n  public static List<Contact> safeQueryContacts() {\n    // Your code here\n  }\n}`,
    hints: [
      "Use Schema Methods: Utilize Schema.sObjectType.Contact.isAccessible() to check for read access.",
      "Throw Custom Exception: If access is not granted, throw a custom exception to prevent unauthorized access.",
      "Implement in Apex Class: Incorporate this check in any Apex class or method that queries Contact records.",
      "Test with Different Profiles: Create test cases with users having varying permissions to ensure proper functionality."
    ]
  },
  {
    id: 305,
    title: "Asynchronous Update of Account's Total Closed Opportunity Amount",
    level: "Master",
    description: "Aggregate the total Amount of Opportunities closed today and update the parent Account's Total_Closed_Amount__c field.",
    starterCode: `global class ClosedAmountBatch implements Database.Batchable<SObject> {\n  global Database.QueryLocator start(Database.BatchableContext bc) {\n    // Your code here\n    return null;\n  }\n  global void execute(Database.BatchableContext bc, List<SObject> scope) {\n    // Your code here\n  }\n  global void finish(Database.BatchableContext bc) {}\n}`,
    hints: [
      "Batch Apex Implementation: Use Batch Apex to process large volumes of Opportunity records.",
      "Aggregate Data: In the batch's execute method, aggregate Opportunity amounts grouped by AccountId.",
      "Update Accounts: Update the corresponding Account records with the aggregated totals.",
      "Schedule Batch Job: Schedule the batch job to run daily to keep data up-to-date.",
      "Handle Errors: Implement error handling to manage any exceptions during processing."
    ]
  },
  {
    id: 306,
    title: "Graceful Handling of DML Exceptions During Bulk Insert",
    level: "Master",
    description: "Insert a list of Contact records, handling any DML exceptions gracefully without halting the entire operation.",
    starterCode: `public class ContactBulkInsert {\n  public static void insertContacts(List<Contact> contactsList) {\n    // Your code here\n  }\n}`,
    hints: [
      "Use Database.insert: Utilize Database.insert(contactsList, false) to allow partial success.",
      "Process Results: Iterate through the Database.SaveResult[] to identify successful and failed inserts.",
      "Log Errors: For failed records, log the error messages for further analysis.",
      "Notify Users: Optionally, notify users or administrators about the failed records."
    ]
  },
  {
    id: 307,
    title: "Retry Logic for Failed HTTP Callouts",
    level: "Master",
    description: "Implement retry logic for HTTP callouts that fail due to transient issues, with a maximum of 3 attempts.",
    starterCode: `public class CalloutRetrier {\n  public static void performCalloutWithRetry() {\n    // Your code here\n  }\n}`,
    hints: [
      "Create a Retry Mechanism: Develop a method that attempts the callout and retries upon failure.",
      "Use Exponential Backoff: Implement a delay between retries, increasing the wait time after each failed attempt.",
      "Limit Retries: Set a maximum number of retries to prevent infinite loops.",
      "Log Failures: Log any failures after all retries have been exhausted for further investigation.",
      "Asynchronous Processing: Perform callouts asynchronously using Queueable Apex to avoid blocking operations."
    ]
  },
  {
    id: 308,
    title: "Prevent Contact Creation for Restricted Account Industries",
    level: "Master",
    description: "Prevent the creation of Contact records for Accounts in restricted industries.",
    starterCode: `trigger PreventContactOnRestrictedIndustry on Contact (before insert) {\n  // Your code here\n}`,
    hints: [
      "Trigger on Contact Insert: Create a before insert trigger on the Contact object.",
      "Query Parent Accounts: Retrieve the Industry field of the parent Account for each new Contact.",
      "Validate Industry: If the Industry is restricted, add an error to the Contact record to prevent insertion.",
      "Bulk Processing: Ensure the trigger handles multiple Contact records efficiently."
    ]
  },
  {
    id: 309,
    title: "Nested Map for Opportunity Amounts by Account and Stage",
    level: "Master",
    description: "Create a nested map structure to represent the total Opportunity amounts grouped by AccountId and StageName.",
    starterCode: `public class OpportunityAggregator {\n  public static Map<Id, Map<String, Decimal>> aggregateAmounts() {\n    // Your code here\n  }\n}`,
    hints: [
      "Aggregate SOQL Query: Perform an aggregate query to sum Opportunity amounts grouped by AccountId and StageName.",
      "Build Nested Map: Iterate through the query results to construct a Map<Id, Map<String, Decimal>>.",
      "Utilize Map: Use the nested map for reporting or further processing as needed.",
      "Handle Nulls: Ensure the code handles cases where certain stages may not be present for an account."
    ]
  },
  {
    id: 310,
    title: "Auto-Close Cases When Related Opportunity Is Closed Won",
    level: "Master",
    description: "Automatically close Case records related to an Opportunity when its Stage is updated to 'Closed Won'.",
    starterCode: `trigger AutoCloseCases on Opportunity (after update) {\n  // Your code here\n}`,
    hints: [
      "Trigger on Opportunity Update: Create an after update trigger on the Opportunity object.",
      "Identify Closed Won Opportunities: Filter the updated Opportunity records where Stage has changed to 'Closed Won'.",
      "Query Related Cases: Retrieve Case records associated with these Opportunities.",
      "Update Case Status: Set the Status field of the related Cases to 'Closed'.",
      "Bulk Processing: Ensure the trigger processes multiple Opportunity records efficiently."
    ]
  },
  {
    id: 311,
    title: "Dynamic SOQL with User Input and Security Checks",
    level: "Master",
    description: "Construct a dynamic SOQL query based on user input, ensuring proper security checks are in place.",
    starterCode: `public class DynamicSOQL {\n  public static List<SObject> queryWithSecurity(String userInput) {\n    // Your code here\n  }\n}`,
    hints: [
      "Sanitize User Input: Use String.escapeSingleQuotes() to prevent SOQL injection.",
      "Check Field-Level Security: Verify that the user has access to the fields being queried.",
      "Build Dynamic Query: Construct the SOQL query string dynamically based on the sanitized input.",
      "Execute Query: Use Database.query() to execute the dynamic SOQL.",
      "Handle Exceptions: Implement error handling for any exceptions that may occur during query execution."
    ]
  },
  {
    id: 312,
    title: "Custom REST API to Create Accounts and Contacts",
    level: "Master",
    description: "Develop a custom REST API endpoint to create an Account and its associated Contact records in a single request.",
    starterCode: `@RestResource(urlMapping='/accountContactApi/*')\nglobal with sharing class AccountContactApi {\n  @HttpPost\n  global static void createAccountAndContacts() {\n    // Your code here\n  }\n}`,
    hints: [
      "Define REST Resource: Use the @RestResource annotation to define the endpoint.",
      "Create Apex Class: Develop an Apex class with methods to handle HTTP POST requests.",
      "Parse JSON Input: Deserialize the incoming JSON to extract Account and Contact data.",
      "Insert Records: Insert the Account record first, then associate and insert the Contact records.",
      "Return Response: Provide a meaningful response indicating success or failure."
    ]
  },
  {
    id: 313,
    title: "Chaining Queueable Jobs for Sequential Processing",
    level: "Master",
    description: "Chain multiple Queueable Apex jobs to perform sequential processing tasks.",
    starterCode: `public class FirstJob implements Queueable {\n  public void execute(QueueableContext context) {\n    // Your code here\n    System.enqueueJob(new SecondJob());\n  }\n}\npublic class SecondJob implements Queueable {\n  public void execute(QueueableContext context) {\n    // Your code here\n  }\n}`,
    hints: [
      "Implement Queueable Interface: Create classes that implement the Queueable interface for each processing step.",
      "Chain Jobs: In the execute method of the first job, enqueue the next job using System.enqueueJob().",
      "Pass Data Between Jobs: Use constructor parameters or static variables to pass data between jobs.",
      "Handle Errors: Implement error handling in each job to manage exceptions.",
      "Monitor Job Status: Use the AsyncApexJob object to monitor the status of the jobs."
    ]
  },
  {
    id: 314,
    title: "Custom Roll-Up Summary for Lookup Relationships",
    level: "Master",
    description: "Implement a custom roll-up summary to calculate the total Budget__c of Project__c records related to an Account.",
    starterCode: `trigger ProjectRollup on Project__c (after insert, after update, after delete, after undelete) {\n  // Your code here\n}`,
    hints: [
      "Trigger on Project__c: Create triggers on Project__c for insert, update, and delete events.",
      "Aggregate Budget: Use aggregate SOQL queries to sum the Budget__c values grouped by AccountId.",
      "Update Accounts: Update the Total_Budget__c field on the corresponding Account records.",
      "Handle Bulk Operations: Ensure the trigger handles bulk operations efficiently.",
      "Prevent Recursion: Use static variables to prevent recursive trigger execution."
    ]
  },
  {
    id: 315,
    title: "Real-Time Validation: Prevent Creation of Case if Contact's Email Domain is Blacklisted",
    level: "Master",
    description: "Implement a real-time validation that prevents a Case from being created if the related Contact’s email domain (e.g., @spam.com) is blacklisted.",
    starterCode: `trigger PreventBlacklistedCase on Case (before insert) {\n  // Your code here\n}`,
    hints: [
      "Trigger on Case Before Insert: Create a before insert trigger on Case to validate associated Contact records.",
      "Query Related Contacts: Retrieve the Email field of the parent Contact for each Case using a Set<Id> to handle bulk inserts.",
      "Extract Domain: Use String.split('@') to get the domain part of the Email.",
      "Compare with Blacklist: Store blacklisted domains in a Set<String> and check if the domain matches.",
      "Add Error Messages: For matches, add addError() to the Case record to prevent insertion."
    ]
  },
  {
    id: 316,
    title: "Dynamic Field Update Based on Custom Metadata",
    level: "Master",
    description: "Design logic that dynamically updates a specific field on Opportunity based on rules defined in CustomMetadata__mdt.",
    starterCode: `trigger DynamicFieldUpdate on Opportunity (before update) {\n  // Your code here\n}`,
    hints: [
      "Query Custom Metadata: Retrieve CustomMetadata__mdt records containing field names and values.",
      "Map Metadata: Create a Map<String, String> where the key is a condition (e.g., Stage) and the value is the field to update.",
      "Trigger on Opportunity Update: Create a trigger that checks the Stage field of the updated Opportunity.",
      "Apply Updates: Dynamically determine which field to update using SObject.put().",
      "Bulkify Processing: Handle multiple Opportunity records efficiently and avoid SOQL in loops."
    ]
  },
  {
    id: 317,
    title: "Synchronize Related Records Between Two Custom Objects Using Future Callouts",
    level: "Master",
    description: "When a record in CustomObjectA__c is updated, synchronize related data to CustomObjectB__c via an external system's API using @future callouts.",
    starterCode: `trigger SyncCustomObjects on CustomObjectA__c (after update) {\n  // Your code here\n}\npublic class CustomObjectSync {\n  @future(callout=true)\n  public static void syncToExternal(Set<Id> recordIds) {\n    // Your code here\n  }\n}`,
    hints: [
      "Trigger on CustomObjectA__c: Create an after update trigger on CustomObjectA__c.",
      "Identify Changes: Detect which fields were updated to decide if synchronization is required.",
      "Callout in Future Method: Pass necessary IDs and data to an @future method that performs the HTTP callout.",
      "Handle Responses: Parse the external system’s response and update CustomObjectB__c accordingly.",
      "Bulk Processing: Ensure @future can handle multiple records in a single call."
    ]
  },
  {
    id: 318,
    title: "Create a Complex Aggregation Map Involving Three Related Objects",
    level: "Master",
    description: "Build a Map<Id, Map<Id, Decimal>> where the first Id is AccountId, the inner Id is OpportunityId, and the Decimal is the sum of related CustomObject__c.Amount__c fields.",
    starterCode: `public class ComplexAggregator {\n  public static Map<Id, Map<Id, Decimal>> aggregateThreeLevels() {\n    // Your code here\n  }\n}`,
    hints: [
      "Multi-Level Queries: Use SOQL to join CustomObject__c → Opportunity → Account.",
      "Build Nested Map: Loop through CustomObject__c records, grouping data by AccountId and OpportunityId.",
      "Handle Missing Levels: Ensure you handle cases where an Opportunity or Account might be missing.",
      "Efficient Aggregation: Use Map structures to accumulate sums without nested loops.",
      "Optimize Queries: Retrieve only required fields and limit queries to avoid exceeding governor limits."
    ]
  },
  {
    id: 319,
    title: "Cross-Object Validation with Large Data Volume Handling",
    level: "Master",
    description: "Prevent Opportunity closure (Stage = Closed Won) if its parent Account has any open Case.",
    starterCode: `trigger PreventOpportunityClosure on Opportunity (before update) {\n  // Your code here\n}`,
    hints: [
      "Trigger on Opportunity Before Update: Create a before update trigger on Opportunity.",
      "Filter Opportunities: Identify Opportunity records transitioning to Closed Won.",
      "Query Open Cases: Retrieve Case records with Status != 'Closed' for the parent Accounts of these Opportunities.",
      "Use Maps for Efficiency: Map AccountId to Open Cases to quickly check if a given Opportunity's Account has open Cases.",
      "Add Errors: For matching Opportunities, add an error message using addError() to block the update."
    ]
  },
  {
    id: 320,
    title: "Chained Asynchronous Jobs for Complex Data Processing",
    level: "Master",
    description: "Implement a chain of asynchronous operations: first, a Batch Apex to process Lead data; second, enqueue a Queueable to convert high-quality Leads into Contacts; third, call an external service for enrichment using an @future method.",
    starterCode: `global class LeadBatch implements Database.Batchable<SObject> {\n  global Database.QueryLocator start(Database.BatchableContext bc) {\n    // Your code here\n    return null;\n  }\n  global void execute(Database.BatchableContext bc, List<SObject> scope) {\n    // Your code here\n  }\n  global void finish(Database.BatchableContext bc) {\n    System.enqueueJob(new LeadToContactQueueable());\n  }\n}\npublic class LeadToContactQueueable implements Queueable {\n  public void execute(QueueableContext context) {\n    // Your code here\n    LeadEnrichment.enrichContacts(new Set<Id>());\n  }\n}\npublic class LeadEnrichment {\n  @future(callout=true)\n  public static void enrichContacts(Set<Id> contactIds) {\n    // Your code here\n  }\n}`,
    hints: [
      "Batch Apex for Leads: Identify and flag high-quality Leads based on criteria (e.g., score).",
      "Enqueue Queueable Job: From finish method of Batch, enqueue Queueable to convert flagged Leads to Contacts.",
      "@future Callout: In the Queueable, after conversion, invoke an @future method to call an external enrichment service.",
      "Chain Processing: Ensure each step only executes after the previous one completes successfully.",
      "Governor Limit Safety: Handle large volumes efficiently by avoiding excessive SOQL/DML and performing operations asynchronously."
    ]
  },
  // ...existing or future questions...
];

// If this file is run directly, start the server
if (require.main === module) {
  const app = express();
  app.use(cors());

  app.get("/api/apexscenarios", (req, res) => {
    res.json(apexScenarios);
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = [apexScenarios];