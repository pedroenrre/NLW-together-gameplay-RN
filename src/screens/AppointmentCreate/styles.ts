import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label:{
    fontSize:18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  form:{
    paddingHorizontal: 24,
    marginTop: 32,
  },
  select:{
    width: '100%',
    flexDirection: 'row',
    height: 68,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 25,
    overflow: 'hidden',
  },
  image:{
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary50,
    borderRadius: 8,
  },
  field:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  collumn:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider:{
    marginRight: 4,
    fontSize: 18,
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
  },
  caracteresLimit:{
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading
  },
  footer:{
    marginTop: 20,
    marginBottom: 56,
  },
});