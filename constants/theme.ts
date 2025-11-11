export const colors = {
  // Primary colors
  primary: '#51acb5',              
  checkboxChecked: '#50acb4',      
  checkboxUnchecked: '#000000',    
  checkmarkWhite: '#FFFFFF',       
  
  // Text colors
  textPrimary: '#1F2937',          
  textMuted: '#9CA3AF',            
  textPlaceholder: '#9CA3AF',      
  textLight: '#D1D5DB',            
  
  // UI colors
  border: '#E5E7EB',               
  background: '#FFFFFF',           
  backgroundSecondary: '#F9FAFB',  
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  full: 9999,
};

export const typography = {
  title: {
    fontSize: 32,
    fontWeight: '700' as const,
  },
  body: {
    fontSize: 16,
    fontWeight: '400' as const,
  },
  caption: {
    fontSize: 14,
    fontWeight: '400' as const,
  },
};