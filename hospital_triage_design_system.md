# Hospital Triage App – Design System
CST3106 – Lab 10  
Name: Tarneet Kaur  

## 1. Typography (Fonts)

### Primary Font — Times New Roman
The entire Hospital Triage App uses **Times New Roman** as the universal font across all pages and components. This serif font is commonly used in academic, medical, and administrative settings, offering a formal and highly readable appearance.

**Font weights used:**
- Regular (400): Body text, labels, table data  
- Bold (700): Page titles, section headings, button labels  

### Rationale
Times New Roman is chosen because it:
- creates a formal and trustworthy medical appearance  
- is highly readable, even at smaller sizes  
- is a standard system font, ensuring consistency  
- complements the structured design of the app  

Using one global font maintains clarity and consistency.

## 2. Colour Palette

The colour palette is calm, readable, and aligned with medical UI standards. It uses neutral tones, blue-green accents, and universal triage severity colours.

### Primary Colours
- Primary Theme: `#006D77`  
- Secondary Accent: `#83C5BE`  
- Light Background: `#F6F9FA`  

### Neutral Colours
- Light Gray: `#E9ECEF`  
- Medium Gray: `#ADB5BD`  
- Dark Text: `#1C1C1C`  

### Triage Severity Colours
- Low: `#74C69D`  
- Medium: `#F9C74F`  
- High: `#F8961E`  
- Critical: `#D00000`  

### Rationale
- Blue/green tones create a calm and professional tone  
- Soft backgrounds improve readability  
- Grays help divide content without harsh contrast  
- Severity colours match global triage standards  

## 3. App Components

### 3.1 Titles
- User Page Title: *Hospital Triage – User*  
- Admin Page Title: *Hospital Triage – Admin*  

**Styling:**
- Times New Roman, Bold, 36–40px  
- Primary theme colour  
- Center-aligned  

### 3.2 Buttons

#### Primary Buttons (Submit / Load Data)
- Font: Times New Roman, Bold  
- Background: `#006D77`  
- Text: White  
- Border-radius: 6px  
- Padding: 10–18px  

#### Option Buttons (Injury Types / Pain Levels)
- Font: Times New Roman, Regular  
- Background: `#E9ECEF`  
- Border: `1px solid #ADB5BD`  
- Radius: 6px  
- Hover: Slightly darker gray  

### 3.3 Input Fields
- Font: Times New Roman  
- Border: 1px solid gray  
- Padding: 10px  
- Width: 250–320px  
- Rounded corners  
- White background  

### 3.4 Cards and Panels
Used for grouping:
- forms  
- summaries  
- admin actions  

**Design:**
- Times New Roman  
- White or light gray backgrounds  
- Soft shadow  
- Rounded corners  
- 20–28px padding  

## 4. Layout and Navigation

### 4.1 User Page Layout
The user page contains:
- Title  
- Short instruction  
- Grid of injury type buttons  
- Row of pain level buttons  
- Submit button  

### 4.2 Admin Page Layout
The admin page contains:
- Title  
- Small instruction text  
- A table showing:  
  - entry number  
  - necessary attention level  
  - injury type  
  - pain level  
  - select button  
- “Load Data” button  
- Action panel (increase, decrease, remove)  

## 5. Navigation Flow

### User Flow
1. Select injury type  
2. Select pain level  
3. Submit  
4. Data goes to admin  

### Admin Flow
1. Load data  
2. Select an entry  
3. Increase/decrease/remove  
4. Table reorders automatically  

## 6. Design Consistency

Consistency is achieved through:
- Universal font (Times New Roman)  
- Unified colour palette  
- Matching border radius across all elements  
- Consistent spacing and shadows  
- Standard severity colours used across screens  

## 7. Conclusion

This design system sets a clean, structured, and professional foundation for the Hospital Triage App. Times New Roman, medical-friendly colours, and simple layouts ensure the app remains readable, consistent, and suitable for emergency triage workflows.

It will guide the development of the full application in future assignments.
n for building the full application in future development stages.
